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

