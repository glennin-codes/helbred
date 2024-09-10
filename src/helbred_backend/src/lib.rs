
#[macro_use]
extern crate serde;

use candid::{CandidType, Principal};
use health_record::{ HealthRecord, PersonalInfo, Treatment};
mod health_record;
pub mod error_handler;
pub mod utils;
use error_handler::CustomError;
use ic_cdk::{api::call::CallResult, query, update};
use ic_stable_structures::{  
    memory_manager::{
    MemoryId, MemoryManager, VirtualMemory }, Cell, DefaultMemoryImpl, StableBTreeMap
};

use std::{cell::RefCell, collections::HashMap};

#[allow(unused_variables)]
// Defining Memory and IdCell
type Memory = VirtualMemory<DefaultMemoryImpl>;
type IdCell = Cell<u64, Memory>;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
        MemoryManager::init(DefaultMemoryImpl::default())
    );
    static ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
            0
        ).expect("Cannot create a counter")
    );

    static STORAGE: RefCell<StableBTreeMap<u64,HealthRecord, Memory>> = RefCell::new(
        StableBTreeMap::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))))
    );
    static HEALTH_RECORDS: RefCell<HashMap<String, HealthRecord>> = RefCell::new(HashMap::new());
    static USER_IDS: RefCell<HashMap<String, u64>> = RefCell::new(HashMap::new());
    static EMAIL_TO_PUBLIC_KEY: RefCell<HashMap<String, String>> = RefCell::new(HashMap::new());
}
#[derive(CandidType, Deserialize)]
struct AuthPayload {
    public_key: String,
    signature: Vec<u8>,
}

// Function to authenticate a request
#[update]
async fn authenticate(auth_payload: AuthPayload) -> Result<bool, CustomError> {
    let ii_principal = Principal::from_text("rdmx6-jaaaa-aaaaa-aaadq-cai").unwrap();

    let ii_result: CallResult<(bool,)> = ic_cdk::call(
        ii_principal,
        "verify_signature",
        (auth_payload.public_key.clone(), auth_payload.signature.clone()),
    )
    .await;

    match ii_result {
        Ok((is_valid,)) => {
            if is_valid {
                Ok(true)
            } else {
               Err(CustomError::Custom("Invalid signature".to_string()))
            }
        }
        Err(e) => Err(CustomError::Custom( format!("Error verifying signature: {:?}", e))),
    }
}

#[update]

fn insert_initial_health_record(
    personal_info: PersonalInfo,
   
) -> Result<u64, CustomError> {
    USER_IDS.with(|user_ids| {
        let email = &personal_info.email;
        if user_ids.borrow().contains_key(email) {
            return Err(CustomError::UserAlreadyExists);
        }
        
        let id = ID_COUNTER.with(|counter| {
            let new_id = *counter.borrow().get();
            counter.borrow_mut().set(new_id + 1)
                .expect("cannot increment id counter")
        });

        let health_record = HealthRecord {
            personal_info: personal_info.clone(),
            medicational_changing_data: Vec::new(),
        };

        STORAGE.with(|storage| {
            storage.borrow_mut().insert(id, health_record);
        });

        user_ids.borrow_mut().insert(email.clone(), id);

        Ok(id)
    })
}
#[update]
fn update_medical_data(
    email: String,
    new_medical_data: Treatment
) -> Result<(), CustomError> {
    USER_IDS.with(|user_ids| {
        if let Some(&id) = user_ids.borrow().get(&email) {
            STORAGE.with(|storage| {
                let mut storage = storage.borrow_mut();
                if let Some(mut record) = storage.get(&id) {
                    record.medicational_changing_data.push(new_medical_data);
                    storage.insert(id, record);
                    Ok(())
                } else {
                    Err(CustomError::RecordNotFound)
                }
            })
        } else {
            Err(CustomError::UserNotFound)
        }
    })
}

#[query]
fn query_health_record(email: String) -> Result<HealthRecord, CustomError> {
    EMAIL_TO_PUBLIC_KEY.with(|email_map| {
        if let Some(public_key) = email_map.borrow().get(&email) {
            USER_IDS.with(|user_ids| {
                if let Some(&id) = user_ids.borrow().get(public_key) {
                    STORAGE.with(|storage| {
                        storage.borrow().get(&id)
                            .ok_or(CustomError::RecordNotFound)
                    })
                } else {
                    Err(CustomError::UserNotFound)
                }
            })
        } else {
            Err(CustomError::UserNotFound)
        }
    })
}




ic_cdk::export_candid!();