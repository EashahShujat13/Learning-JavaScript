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