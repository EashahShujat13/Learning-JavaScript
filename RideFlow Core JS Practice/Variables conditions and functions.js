// Q1. Employee pickup check
// Function banao jo check kare ke driver ne employee ko pick kiya hai ya nahi.
// - true ho toh pickup complete ka message.
// - false ho toh pending pickup ka message.
// Hint: Function parameter, if/else, return.

function isEmployeePickedup(pickupStatus){
    if(!pickupStatus){
        return "Driver has not picked up the employee yet. Pickup is pending.";
    } else {
        return "Driver has picked up the employee. Pickup is complete.";
    }
}

console.log(isEmployeePickedup(true));  
console.log(isEmployeePickedup(false)); 