// Import necessary cryptographic libraries for encryption and zero-knowledge proofs
use candid::{Decode, Encode};
use ic_stable_structures::{self, Storable};
use std::borrow::Cow;

#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
// Define a basic struct for personal information (encrypted for privacy)
pub struct PersonalInfo {
    pub name: Option<String>,      // Optionally encrypted, only accessible with permission
    pub dob: Option<String>,       // Date of birth (DD/MM/YYYY), can be optional for anonymity
    pub location: Option<String>,  // General location, can be selectively shared
    pub wallet_address: String,    // User's blockchain wallet address (acts as a pseudonymous identity)
    pub public_key: String,        // Public key for verifying access rights and cryptographic actions
    pub private_key: Option<String>, // Private key, if user is managing key recovery on their own
}

// Struct for treatments the patient has received
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct Treatment {
    pub date: String,                // Date of treatment (DD/MM/YYYY)
    pub doctor_name: Option<String>, // Doctor's name (can be private)
    pub hospital: Option<String>,    // Hospital where treatment took place (optional)
    pub diagnosis: String,           // The diagnosis made by the doctor
    pub prescription: Vec<Medication>, // List of medications prescribed
}

// Struct for medications (part of Treatment)
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct Medication {
    pub name: String,      // Medication name
    pub dosage: String,    // Dosage information
    pub frequency: String, // Frequency of administration (e.g., twice a day)
    pub medicine : Vec<String>
}

// Struct for lab results (imaging, blood tests, etc.)
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct LabResult {
    pub test_name: String,   // Name of the test (e.g., "Complete Blood Count", "X-ay")
    pub date: String,        // Date of the test (DD/MM/YYYY)
    pub result_summary: String, // Short summary of the result (e.g., "Normal", "High", "Low")
    pub full_report_link: Option<String>, // Optional: link to full report (stored off-chain, e.g., on IPFS)
    pub verified: bool,      // Whether the result has been verified by a doctor or lab
}

// Struct for the complete Health Record (combining all patient data)
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct HealthRecord {
    pub personal_info: PersonalInfo,           // Personal details (can be optional or encrypted)
    pub emergency_data: EmergencyData,
    pub medicational_changing_data:Vec<DoctorsPart>
}
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct  DoctorsPart{
    pub treatments: Vec<Treatment>,            // List of treatments the patient has received
    pub lab_results: Vec<LabResult>,           // List of lab results and diagnostic tests
    // pub medical_images: Vec<MedicalImage>,     // Imaging results (e.g., X-rays, MRIs)
    // pub zkp_proofs: Option<ZKPProofData>,      // Optional ZKP for selective data sharing
      
}



// Struct for critical emergency data (pre-authorized for emergency access)
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct EmergencyData {
    pub blood_type: String,          // Blood type of the patient (critical for emergencies)
    pub allergies: Vec<String>,      // List of allergies (e.g., penicillin, peanuts)
    pub chronic_conditions: Vec<String>, // List of chronic conditions (e.g., diabetes, hypertension)
    pub emergency_contacts: Vec<EmergencyContact>, // Trusted contacts to notify in emergencies
    pub trusted_hospitals: Vec<String>, // Pre-authorized hospitals for emergency access
}

// Struct for emergency contacts
#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct EmergencyContact {
    pub name: String,
    pub relationship: String,       // Relationship to the patient (e.g., spouse, parent)
    pub contact_number: String,     // Contact phone number
    pub public_key: String,         // Public key for emergency access verification
}






/// States whether the type's size is bounded or unbounded.
pub enum Bound {
    /// The type has no size bounds.
    Unbounded,

    /// The type has size bounds.
    Bounded {
        /// The maximum size, in bytes, of the type when serialized.
        max_size: u32,

        /// True if all the values of this type have fixed-width encoding.
        /// Some data structures, such as stable vector, can take
        /// advantage of fixed size to avoid storing an explicit entry
        /// size.
        ///
        /// Examples: little-/big-endian encoding of u16/u32/u64, tuples
        /// and arrays of fixed-size types.
        is_fixed_size: bool,
    },
}
pub trait BoundedStorable {
    const MAX_SIZE: u32;
    const IS_FIXED_SIZE: bool;
}

impl Storable for HealthRecord{
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
    


}