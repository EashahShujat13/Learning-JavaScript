
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


// Level 02   — Numbers aur calculations

// Q6. Total passengers Tumhare paas employees ki list hai.
//  Function total employees count return kare.
//  Hint: Array ki length check karo.

let passengers = ["Aisha","Ahad","Hamad","Sara","Kainat","Ahmed","Wassay"]

const countTotalPassengers = ()=>{
   return passengers.length
}

console.log(countTotalPassengers());

// Q7. Available seats Vehicle ki total seats aur already occupied seats di gayi hain.
//  Available seats calculate karo.
//  Hint: Available seats = total seats − occupied seats.

let occupiedSeats = 4;
let totalVehicleSeats = 7;

const countAvailableSeats = ()=>{
    let availableSeats = totalVehicleSeats - occupiedSeats ;
    if(availableSeats > 0 ){
    return availableSeats ;
    }else{
        return "There is no more seat left"
    }
}
console.log(countAvailableSeats()); 

// Q8. Vehicle capacity check Function ko totalSeats aur passengerCount mile.
//  Check karo ke vehicle mein sab passengers aa sakte hain ya nahi.
//  Hint: Compare karo ke passengers ki tadaad seats se kam ya barabar hai.

const checkVehicleCapacity = (totalSeats,passengerCount)=>{
    let vehicleCapacity = totalSeats >= passengerCount ;
    return vehicleCapacity ;
}
console.log(checkVehicleCapacity(8,6));

// 9. Trip cost per employee
//  Ek trip ka total cost aur employees ki tadaad di gayi hai.
//  Har employee ka average cost calculate karo. Hint: Division (/) use karo.
//  Agar employees zero hon toh kya hoga?

const checkTripAverageCost = (totalCost,employeeCount)=>{
    
    if (employeeCount === 0){
        return "Average cost cannot be obtain over 0 employee" ;
    }else{
        let averageCost = totalCost / employeeCount ;
        return averageCost ;
    }
};

console.log(checkTripAverageCost(50,5));

// Q10. Average pickup delay  gpt sy smjha h cuz i forgot.
// Pickup delays ki list hai, jaise [5, 10, 0, 15] minutes.
//  Average delay calculate karo.
//  Hint: Pehle tamam numbers ka sum, phir list ki length se divide.
//  Loop ya array methods ka use kar sakti ho.
// return hamesha loop sy bhr likhty h wran loop terminate hojai ga

let delayTimes =[5,10,0,15] ;


const calculateAverageDelay = ()=>{
    let totalSum = 0;
    for(let i = 0; i < delayTimes.length ; i++ ){
         totalSum = totalSum + delayTimes[i] ;
    }
    let averageDelay =  totalSum/delayTimes.length ;
       return averageDelay ; 
}

console.log(calculateAverageDelay());

// same question solved by reduce(){} arrya method to sum arrays value only 

let delayTimes02 = [5, 10, 0, 15];

let totalSum = delayTimes02.reduce((total, number) => {
    return total + number;
}, 0);

console.log(totalSum); // 30


// Level 03 Arrays aur objects

// Q11. Employees ke naam print karo Is array ke har employee ka naam print karo:
// hmny map use kiya h but hmaein function k andr return bhi lagana hoga taky function proper map return kry
const employees = [
    {
       name: "Ali",
       pickedUp: true
    },
    { 
        name: "Sara",
        pickedUp: false
    },
    {
         name: "Ahmed", 
         pickedUp: true
    } 
];

const getEmployeeNames = ()=>{
    return employees.map((employeeName)=>{
        return employeeName.name
    })
}

console.log(getEmployeeNames());

// Q12. Sirf picked-up employees
//  Usi array mein se sirf un employees ko nikaalo jinka pickedUp true hai.
//  Hint: filter() aur boolean condition. or phr us sy map lga k names bhi nkal lo qnky filter sirf validate kry ga element ko.or map direct return kry ga value.

const getPickedUpEmployee = () =>
    employees.filter((employee)=>{
        return employee.pickedUp ;
    }).map((employeeName) => {
        return employeeName.name
    })

console.log(getPickedUpEmployee());


// Q13. Employee search 
// Employee list mein se kisi particular ID wala employee dhoondo.
//  Hint: find() use karo. 
// Socho agar ID na mile toh result kya hoga.

const searchId = null ;

const findEmployeeId = () => {
    employees.find(employees.id === searchId)
    if(!searchId){
        return "Employee ID not Found"
    }
};

console.log(findEmployeeId());

// const employees = [
//   { id: 101, name: "Ali", pickedUp: true },
//   { id: 102, name: "Sara", pickedUp: false },
//   { id: 103, name: "Ahmed", pickedUp: true }
// ];

// let searchId = null;

// function searchEmployee(id) {
//   searchId = Number(id);

//   const employee = employees.find(
//     employee => employee.id === searchId
//   );

//   if (employee) {
//     console.log("Employee Found:", employee);
//   } else {
//     console.log("Employee Not Found");
//   }
// }

// searchEmployee(102);


// Output:
// Employee Found: { id: 102, name: "Sara", pickedUp: false }


// // Ab flow samjho
// // 1. searchId = null — abhi koi ID search nahi hui.
// // 2. searchEmployee(102) — manager ki enter ki hui ID function ko milti hai.
// // 3. searchId = Number(id) — searchId ki value 102 ho jati hai.
// // 4. find() har employee ki id ko searchId se compare karta hai.
// // 5. Jis employee ki ID 102 match karti hai, uska object return ho jata hai.
// // Yaad rakho: null sirf initial value hai. Jab tak tum usay update nahi karogi, woh null hi rahega. Aur agar input se ID string "102" aaye, to Number() usay number 102 mein convert karta hai taake comparison sahi ho.
