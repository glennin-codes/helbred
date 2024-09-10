use std::error::Error;
use std::fmt;

// Define custom error type
#[derive(Debug, candid::CandidType, Deserialize, Serialize)]
pub enum CustomError {
    UserAlreadyExists,
    UserNotFound,
    RecordNotFound,
    Custom(String),
}

impl fmt::Display for CustomError {
    fn fmt(&self, _f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            CustomError::Custom(err) => Ok(ic_cdk::print(err)),
            CustomError::UserAlreadyExists =>Ok(ic_cdk::print("user already exists".to_string())),
            CustomError::UserNotFound => Ok(ic_cdk::print("user not found".to_string())),
            CustomError::RecordNotFound => Ok(ic_cdk::print("Record Not Found".to_string())),

        }
    }
}
impl Error for CustomError {
    
}