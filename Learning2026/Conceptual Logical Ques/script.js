// Q1. Vehicle ki seats calculate karo
// Concepts: let, const, numbers, operators
// RideFlow ki van mein 7 seats hain. Un mein se 4 seats occupied hain.
// Task: totalSeats aur occupiedSeats variables banao aur calculate karo ke kitni seats available hain.
// Expected output: 3

let totalSeats = 7;
let occupiedSeats = 4;

const availableSeats = totalSeats - occupiedSeats;
console.log(availableSeats); 


// Q2. Driver late hai ya nahi?
// Concepts: Variables, subtraction, comparison operators
// Driver ka pickup time 8 hai aur current time 8.25 hai. Yahan 0.25 hour ka matlab 15 minutes hai.
// Task: Calculate karo ke driver kitne minutes late hai. Agar current time pickup time se aagay hai to late minutes nikalo.
// Expected output: 15

const pickupTime = 8; 
const currentTime = 8.25; 

const lateTime = currentTime - pickupTime;
const lateMinutes = lateTime * 60; 

console.log(lateMinutes);


// Q3. Employee ki information check karo
// Concepts: Data types, typeof, const
// Ek employee ka naam "Ali", ID 102, aur attendance true hai.
// Task: Teen variables banao aur check karo ke naam string hai, ID number hai aur attendance boolean hai.
// Expected output: string, number, boolean


let employeeName = "Ali";
let ID = 102;
let attendance = true;

console.log(typeof employeeName); 
console.log(typeof ID); 
console.log(typeof attendance); 


// Q5. Login verification
// Concepts: == aur === Task: Dono values ko pehle == aur phir === se compare karo. Dono results alag kyun aate hain, yeh bhi samjho.
// Expected output: true, phir false

const enteredId = "102";
const registeredId = 102;

const compareId = enteredId == registeredId;
const strictCompareId = enteredId === registeredId;

console.log(compareId); 
console.log(strictCompareId);


// Q6. Driver available hai?
// Concepts: Truthy/falsy, !, conditions
// Task: Agar driver available nahi hai to "Assign another driver" return karo. Warna "Driver assigned".
// Expected output: Assign another driver.

let driverAvailable = false;
const driverStatus = !driverAvailable ? "Assign to another driver" : "Driver assigned";
console.log(driverStatus);


// Q7. Passenger pickup status
// Concepts: if/else, booleans
// Ek passenger ka isPickedUp status true ya false hoga.
// Task: Function banao jo true par "Passenger picked up" aur false par "Waiting for pickup" return kare.

const passengerStatus = (isPickedUp) =>{
    if(isPickedUp){
        return "Passenger picked up";
    } else {
        return "Waiting for pickup";
    }
}

console.log(passengerStatus(true));
console.log(passengerStatus(false));


// Q8. Vehicle capacity check
// Concepts: Multiple conditions, comparison operators, &&
// Van ki capacity 7 hai aur passenger count 8 hai.
// Task: Check karo ke passenger count zero se zyada aur capacity ke barabar ya us se kam hai. Valid ho to "Valid passenger count", warna "Invalid passenger count".
// Expected output: Invalid passenger count

const vehicleCapacity = 7;
const checckVehicleCapacity = (passengerCount) => {
    if(passengerCount > 0 && passengerCount <= vehicleCapacity){
        return "Valid passenger count";
    }
    else{
        return "Invalid passenger count";
    }
}

console.log(checckVehicleCapacity(8));
console.log(checckVehicleCapacity(5));


// Q9. Attendance ke mutabiq action
// Concepts: if, else if, else
// Employee ka status "present", "absent" ya "late" ho sakta hai.
// Task: Har status ke liye alag message return karo. Agar status in teenon mein se koi nahi, to "Invalid status" return karo.
// ques 13 and 9 are almost same
const checkEmployeeStatus = (status) =>{
    if(status === "present"){
        return "Employee is present";
    }else if(status === "absent"){
        return "Employee is absent";
    }else if(status === "late"){
        return "Employee is late";
    }else{
        return "Invalid status";
    }
}

console.log(checkEmployeeStatus("present"));
console.log(checkEmployeeStatus("absent"));
console.log(checkEmployeeStatus("late"));
console.log(checkEmployeeStatus("on leave"));

// Q10. Saare pickup numbers print karo
// Concepts: for loop
// RideFlow mein 1 se 7 tak pickup stops hain.
// Task: for loop se 1 se 7 tak saare stop numbers print karo.

for(let i = 1 ; i <=7 ; i ++){
    console.log(i);
}


const delays = [5,  12, 8,  15];
const calculateDelay = () => {
    let count = 0;
    for(let i = 0; i < delays.length; i++){
        count ++;
    }
    return count;
}
console.log(calculateDelay());


// Q15. Secure driver assignment
// Conditions + operators + truthy/falsy
// Driver tabhi assign ho sakta hai jab uski ID valid ho, woh available ho aur vehicle mein seats available hon.
// Task: Teen inputs lekar function banao. Agar teeno conditions true hon to "Driver assigned" return karo, warna "Cannot assign driver".
// Example: ID 101, available true, seats 2.

let driversList = {Id : 101 , status : true , }

const assignDriver = (ID, status, seats) =>{
    if(ID===driversList.Id && status === driversList.status && seats > 0){
        return "Driver assigned";
    }else{
        return "Cannot assign driver";
    }
}

console.log(assignDriver(101 , true, 2));
console.log(assignDriver(102 , false, 1));

// Q16. Route start validation
// Variables + conditions + operators
// Driver ke paas route ID 55, passenger count 4, aur vehicle capacity 7 hai.
// Task: Route tabhi start ho jab route ID valid ho aur passenger count capacity se zyada na ho. Warna route start na karo.

const driverRoutes = {routeID : 55 , passengerCount : 4 , vehicleCapacity : 7}

const startRoute = (ID, passengerCount) =>{
    
        if(ID === driverRoutes.routeID && passengerCount <= driverRoutes.vehicleCapacity){
            return "Route started";
        }else{
            return "Cannot start route";
        }
    }

console.log(startRoute(55 , 4, 7));
console.log(startRoute(56 , 8, 7));


const employees = [
    {
       name: "Ali",
       pickedUp: true,
       pickupStatus: "picked-up"
    },
    { 
        name: "Sara",
        pickedUp: false,
        pickupStatus: "no-show"
    },
    {
         name: "Ahmed", 
         pickedUp: true,
         pickupStatus: "picked-up"
    }, 
    {
         name: "Ayesha", 
         pickedUp: false,
         pickupStatus: "no-show"
    },
    {
         name: "Hammad", 
         pickedUp: false,
         pickupStatus: "no-show"
    },
    {
         name: "Zain", 
         pickedUp: false,
         pickupStatus: "no-show"
    },
    {
         name: "Hira", 
         pickedUp: true,
         pickupStatus: "picked-up"
    },
    {
         name: "Kainat", 
         pickedUp: true,
         pickupStatus: "picked-up"
    },
    {
         name: "Anam", 
         pickedUp: false,
         pickupStatus: "no-show"
    },

];


const checkPickupStatus = (employees) => {
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].pickedUp === true) {
            count++;
        }
    }

    return count;
};

console.log(checkPickupStatus(employees)); // 4