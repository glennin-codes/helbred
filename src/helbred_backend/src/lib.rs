
#[macro_use]
extern crate serde;

use candid::{CandidType, Principal};
use health_record::HealthRecord;
use ic_cdk::{api::call::CallResult, query, update};
mod health_record;
pub mod error_handler;
use error_handler::CustomError;
use ic_stable_structures::{  
    memory_manager::{
    MemoryId, MemoryManager, VirtualMemory }, Cell, DefaultMemoryImpl, StableBTreeMap
};

use std::{cell::RefCell, collections::HashMap};

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

ic_cdk::export_candid!();