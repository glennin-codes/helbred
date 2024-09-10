// Import necessary cryptographic libraries for encryption and zero-knowledge proofs
use candid::{Decode, Encode};
use ic_stable_structures::{  
     BoundedStorable,
Storable
};

use std::borrow::Cow;


#[derive(candid::CandidType, Clone, Serialize, Deserialize,Default)]
// Define a basic struct for personal information (encrypted for privacy)
pub struct PersonalInfo {
    pub name: Option<String>,      
    pub dob: Option<String>,      
    pub location: Option<String>,  
    pub public_key: String,        
    pub email: String,        
}


// Struct for treatments the patient has received
#[derive(candid::CandidType, Clone, Serialize, Deserialize,Default)]
pub struct Treatment {
    pub date: String,               
    pub doctor_name: Option<String>,
    pub hospital: Option<String>,   
    pub diagnosis: String,         
    pub prescription: String,
    pub lab_results:Option<String>,
    pub email:String,

}



// Struct for the complete Health Record (combining all patient data)
#[derive(candid::CandidType, Clone, Serialize, Deserialize,Default)]
pub struct HealthRecord {
    pub personal_info: PersonalInfo,          
    pub medicational_changing_data:Vec<Treatment>
}




impl Storable for HealthRecord{
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
   


}
impl BoundedStorable for HealthRecord {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

