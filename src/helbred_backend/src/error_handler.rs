use std::error::Error;
use std::fmt;

// Define custom error type
#[derive(Debug, candid::CandidType, Deserialize, Serialize)]
pub enum CustomError {
   
    Custom(String),
}

impl fmt::Display for CustomError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            CustomError::Custom(err) => Ok(ic_cdk::print(err)),
        }
    }
}
impl Error for CustomError {}