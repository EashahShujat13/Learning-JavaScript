// Level 5 — Validation aur edge cases 

// Q22. Required employee name Check karo ke employee ka naam empty ya sirf spaces toh nahi.
//  Hint: String ke liye trim() aur condition use karo.

const validEmployeeField = (employeeName) => {
    if (employeeName.trim() === "") {
        return alert("Employee name is required");
    } else {
        return employeeName.trim();
    }
};

console.log(validEmployeeField("   "));

// Q23. Valid passenger count.
//  Passenger count valid tab hai jab woh number ho,
//  zero se zyada ho aur allowed capacity se exceed na kare.
//  Hint: Multiple conditions ko && se combine karne ke baare mein socho.
// Tumhein check karna hai:
// passengerCount number ho. yh typeof bhi use krskti ho.
// passengerCount > 0 ho.
// passengerCount <= capacity ho.
// JavaScript mein data type check karne ke liye typeof operator use hota hai:
// typeof passengerCount === "number"

const checkValidPassengerInVehicle = (passengerCount,vehicleCapacity) =>{
    return (
        typeof passengerCount === "number" &&
        passengerCount > 0 &&
        passengerCount <= vehicleCapacity &&
        vehicleCapacity <= 7 // valid if vehicle capacity is not define in parameter .
    );
};
console.log(checkValidPassengerInVehicle(8, 6));




// Q24. Missing employee ID
// Function ko employee ID milti hai. Missing, null, ya invalid ID ki situation handle karo.
// Hint: null, undefined aur falsy values ek jaisi nahi hotin. Decide karo ke valid ID ka rule kya hai.
// undefined, null, 0, negative number aur non-number reject honge. conditions use kro .
// Pehle check hoga ke ID valid positive number hai.
// Agar ID invalid hai, function "Invalid employee ID" return karega.
// Agar ID valid hai, .find() employees array mein matching ID search karega.
// Agar employee nahi mila, "Employee not found" return hoga.
// Agar employee mil gaya, uska object return hoga.

const employees = [
    { id: 101, name: "Ali" },
    { id: 102, name: "Sara" },
    { id: 103, name: "Ahmed" }
];

const falseEmployeeIDValidation = (employeeId)=>{
    if(typeof employeeId !== "number" || employeeId <= 0 ){
        return "Invalid Emplyee ID"
    }
     const findEmployeeId = employees.find((employee)=>{
        return employee.id === employeeId
    })
    if(!findEmployeeId){
        return "Employee not found" ;
    }
    return findEmployeeId ;
}

console.log(falseEmployeeIDValidation("102")); // Invalid Emplyee ID
console.log(falseEmployeeIDValidation(105)); // Employee not found
console.log(falseEmployeeIDValidation(102)); // { id: 102, name: "Sara" } (employee found)


// Q25. Duplicate assignment rokna
// Check karo ke employee pehle se kisi driver ke saath assigned toh nahi.
// Hint: Existing assignments mein employee ki ID search karo.some() OR find() use kro .

const assignmentsEmployee = [
    { employeeId: 101, driverName: "Ali" },
    { employeeId: 102, driverName: "Ahmed" },
    { employeeId: 103, driverName: "Usman" }
];

const  checkDuplicateAssignment  = (employeeId) => {

    const isDriverAssigned = assignmentsEmployee.some((assignId) => assignId.employeeId === employeeId )
    return isDriverAssigned;

}

console.log(checkDuplicateAssignment(102))

// further making it more functioning ;

const checkDuplicateAssignEmployee = (employeeId) => {

    if (typeof employeeId !== "number" || employeeId <= 0) {
    return "Invalid Employee ID";
    }
    const isDriverAssigned = assignmentsEmployee.some((assignEmployee)=>
    assignEmployee.employeeId === employeeId )

    if(isDriverAssigned){
        return `Employee ${employeeId} Is Already Assign to Driver ${assignmentsEmployee.find((employeeIdDriver)=> employeeIdDriver.employeeId === employeeId).driverName} `
    }else{
        assignmentsEmployee.push({
            employeeId : employeeId ,
            driverName : "New Driver"
        })
        return "EmployeeId is Assign to NewDriver"
    }
}

console.log(checkDuplicateAssignEmployee(102));
console.log(checkDuplicateAssignEmployee(104));

//Q26. Safe division Average delay calculate karte waqt empty array ya zero count ki wajah se invalid result aane se roko.
//  Hint: Calculation se pehle input validate karo.delays.reduce() saare delays ko add karta hai.
//  delays.length batata hai ke array mein kitni entries hain. 



const calculateAverageDelayToValidateFalseInput = (delays)=>{
    if(!delays || delays .length === 0){
        return "Invalid Delays"
    }
    const totalDelays = delays.reduce((acc,current) => acc + current ,0)
    const averageDelay = totalDelays / delays.length 
    return averageDelay ;
} 

console.log(calculateAverageDelayToValidateFalseInput([]))
console.log(calculateAverageDelayToValidateFalseInput([5,0,15,10]))