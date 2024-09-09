// Import necessary cryptographic libraries for encryption and zero-knowledge proofs
use serde::{Serialize, Deserialize};  // For serializing/deserializing data
use candid::{Decode, Encode, Principal};
use ic_stable_structures::{ Storable};
use std::borrow::Cow;

// Define a basic struct for personal information (encrypted for privacy)
#[derive(Serialize, Deserialize, Clone)]
pub struct PersonalInfo {
    pub name: Option<String>,      // Optionally encrypted, only accessible with permission
    pub dob: Option<String>,       // Date of birth (DD/MM/YYYY), can be optional for anonymity
    pub location: Option<String>,  // General location, can be selectively shared
    pub wallet_address: String,    // User's blockchain wallet address (acts as a pseudonymous identity)
    pub public_key: String,        // Public key for verifying access rights and cryptographic actions
    pub private_key: Option<String>, // Private key, if user is managing key recovery on their own
}

// Struct for treatments the patient has received
#[derive(Serialize, Deserialize, Clone)]
pub struct Treatment {
    pub date: String,                // Date of treatment (DD/MM/YYYY)
    pub doctor_name: Option<String>, // Doctor's name (can be private)
    pub hospital: Option<String>,    // Hospital where treatment took place (optional)
    pub diagnosis: String,           // The diagnosis made by the doctor
    pub prescription: Vec<Medication>, // List of medications prescribed
}

// Struct for medications (part of Treatment)
#[derive(Serialize, Deserialize, Clone)]
pub struct Medication {
    pub name: String,      // Medication name
    pub dosage: String,    // Dosage information
    pub frequency: String, // Frequency of administration (e.g., twice a day)
}

// Struct for lab results (imaging, blood tests, etc.)
#[derive(Serialize, Deserialize, Clone)]
pub struct LabResult {
    pub test_name: String,   // Name of the test (e.g., "Complete Blood Count", "X-Ray")
    pub date: String,        // Date of the test (DD/MM/YYYY)
    pub result_summary: String, // Short summary of the result (e.g., "Normal", "High", "Low")
    pub full_report_link: Option<String>, // Optional: link to full report (stored off-chain, e.g., on IPFS)
    pub verified: bool,      // Whether the result has been verified by a doctor or lab
}

// Struct for ZKP (Zero-Knowledge Proof) integration
// #[derive(Serialize, Deserialize, Clone)]
// pub struct ZKPProofData {
//     pub zk_proof: ZKPr,       // ZKP for verifying sensitive data without revealing the details
//     pub zk_verifier: ZKVerifier, // Verifier for validating the proof
// }

// Struct for the complete Health Record (combining all patient data)
#[derive(Serialize, Deserialize, Clone)]
pub struct HealthRecord {
    pub personal_info: PersonalInfo,           // Personal details (can be optional or encrypted)
    pub treatments: Vec<Treatment>,            // List of treatments the patient has received
    pub lab_results: Vec<LabResult>,           // List of lab results and diagnostic tests
    pub medical_images: Vec<MedicalImage>,     // Imaging results (e.g., X-rays, MRIs)
    // pub zkp_proofs: Option<ZKPProofData>,      // Optional ZKP for selective data sharing
    pub emergency_data: Vec<EmergencyData>
}

// Struct for medical images (MRI, X-rays, etc.)
#[derive(Serialize, Deserialize, Clone)]
pub struct MedicalImage {
    pub image_type: String,     // Type of image (e.g., "X-ray", "MRI")
    pub date_taken: String,     // Date the image was taken
    pub image_link: Option<String>, // Link to the image stored off-chain (e.g., IPFS)
    pub verified: bool,         // Whether the image has been verified by a medical professional
}

// Example of a decentralized social recovery mechanism for key management
#[derive(Serialize, Deserialize, Clone)]
pub struct SocialRecoveryKey {
    pub trusted_parties: Vec<String>, // List of trusted parties' wallet addresses for social recovery
    pub threshold: u8,                // Number of parties needed to recover the private key
}

// Struct for critical emergency data (pre-authorized for emergency access)
#[derive(Serialize, Deserialize, Clone)]
pub struct EmergencyData {
    pub blood_type: String,          // Blood type of the patient (critical for emergencies)
    pub allergies: Vec<String>,      // List of allergies (e.g., penicillin, peanuts)
    pub chronic_conditions: Vec<String>, // List of chronic conditions (e.g., diabetes, hypertension)
    pub emergency_contacts: Vec<EmergencyContact>, // Trusted contacts to notify in emergencies
    pub trusted_hospitals: Vec<String>, // Pre-authorized hospitals for emergency access
}

// Struct for emergency contacts
#[derive(Serialize, Deserialize, Clone)]
pub struct EmergencyContact {
    pub name: String,
    pub relationship: String,       // Relationship to the patient (e.g., spouse, parent)
    pub contact_number: String,     // Contact phone number
    pub public_key: String,         // Public key for emergency access verification
}



impl HealthRecord   {}
// impl Storable for HealthRecord   {
//     fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
//         Cow::Owned(Encode!(self).unwrap())
//     }

//     fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
//         Decode!(bytes.as_ref(), Self).unwrap()
//     }
// }

// impl BoundedStorable for HealthRecord   {
//     const MAX_SIZE: u32 = 102400;
//     const IS_FIXED_SIZE: bool = false;
// }