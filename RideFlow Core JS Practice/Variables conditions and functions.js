
// Level 01 — Variables, conditions aur functions Beginner ·

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

// Q2. Employee attendance Ek function banao jo isPresent receive kare.

// Employee present ho toh "Present".
// Present na ho toh "Absent". Hint: Q1 jaisi logic hai, bas situation change hui hai.

const checkEmployeeAttendence = (isPresent)=>{
    if(!isPresent){
        return "The empolyee is not present ";
    }else{
        return "The employee is Present today" ;
    }

}

console.log(checkEmployeeAttendence(true));
console.log(checkEmployeeAttendence(false));



// Q3. Driver availability Function ko isAvailable naam ka boolean mile.

// Driver available ho toh "Driver available".
// Warna "Driver is busy". Hint: Boolean parameter ko condition mein check karo.

const checkDriverAvailability = (isDriverAvailable)=>{
    if(!isDriverAvailable){
        return "Driver is busy";
    }else{
        return "Driver is Available" ;
    }
};

console.log(checkDriverAvailability(true));
console.log(checkDriverAvailability(false));


// Q4. Pickup time check Function ko currentTime aur pickupTime do. 
// Check karo ke pickup time aa gaya hai ya nahi. Hint: Numbers use karke compare karo. 
// currentTime >= pickupTime jaisi comparison socho.


let pickupTime = 8;
let currentTime = 7.5;

const checkPickupTime = () => {

    if (currentTime < pickupTime) {
        const timeLeft = pickupTime - currentTime;
        const minutesLeft = timeLeft * 60;

        return `There are ${minutesLeft} minutes left.`;
    } 
    
    else if (currentTime === pickupTime) {
        return "Pickup time has arrived.";
    } 
    
    else {
        const timePassed = currentTime - pickupTime;
        const minutesPassed = timePassed * 60;

        return `Pickup time has passed by ${minutesPassed} minutes.`;
    }
};

console.log(checkPickupTime());


// Q5. Ride status status parameter ke basis par message return karo:

// "completed" → ride complete
// "in-progress" → ride chal rahi hai
// "cancelled" → ride cancel hai
// Koi aur value → unknown status Hint: if/else if/else ya switch use kar sakti ho.

const checkedRideStatus = (status)=>{
    if(status === "complete"){
        return "Ride is complete"
    }else if(status === "inProgress"){
        return "Ride is in-Progress"
    }else if(status === "cancelled"){
        return "Ride is cancelled"
    }
};

console.log(checkedRideStatus("in-progress"));





