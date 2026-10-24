// Level 4 — Searching, sorting aur data processing .
// Q17. Sabse zyada pickup delay Delays [8, 15, 3, 20, 11] mein se maximum delay find karo.
//  Hint: Math.max() ya loop mein current maximum store karo.

// without using max() for better logical ques

const delays = [8, 15, 3, 20, 11] ;
const findMaxDelay = () => {
    let maxDelay = 0 ;
    for(let i = 0 ; i < delays.length ; i++ ){
        if(delays[i] > maxDelay){
            maxDelay = delays[i]
        }
    }
    return maxDelay ;
}

console.log(findMaxDelay());

// Q18. Second-largest delay Isi type ki array mein second-largest number find karo.
//  Hint: Pehle decide karo ke duplicates allowed hain ya nahi.
//  Sorting se pehle ye rule clear karo.
// sort 2 parameters leta hay a , b.

const  allDelays = [8, 15, 3, 20,8, 11,18,3] ;
const findSecLargestDelay = () => {
    let newArr = [] ;
    for(let i = 0 ; i < allDelays.length ; i++ ){
        if(!newArr.includes(allDelays[i])){
            newArr.push(allDelays[i]) 
        }
    }
    newArr.sort((a ,b) => {return b - a})
    return newArr[1];

}

console.log(findSecLargestDelay());


// Q19. Employees ko alphabetically sort karo Employees ke names ko A se Z tak arrange karo.
//  Hint: sort() use karo.
//  Agar objects hain, toh name property compare karni hogi.

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

// yh syntx hay string ko compare krny ka sort may .
// a.name.localeCompare(b.name).
// .localCompare() built-in method hay .
// return aik hi variable py lagao wrna undefiend hoga 

const getNamesAlphabatically = () => {
    return employees.sort((a,b)=> a.name.localeCompare(b.name) )
    .map((employeeNames)=> employeeNames.name) ;
};

console.log(getNamesAlphabatically());


// // Q20. Longest route find karo
//  Routes ke objects mein distance property di gayi hai.
//   Sabse lambi route find karo. 
//   Hint: find() aur filter() ka purpose samjho.   
//   Maximum value dhoondhne ke liye reduce() bhi useful hai.

const routes = [
    {
        routeId: 101,
        routeName: "North Route",
        distance: 25
    },
    {
        routeId: 102,
        routeName: "City Route",
        distance: 45
    },
    {
        routeId: 103,
        routeName: "Airport Route",
        distance: 32
    },
    {
        routeId: 104,
        routeName: "School Route",
        distance: 60
    },
    {
        routeId: 105,
        routeName: "Office Route",
        distance: 40
    }
];

const findLongestRoute = ()=>{
    return routes.reduce((acc,current) =>acc.distance > current.distance ? acc : current )
}

console.log(findLongestRoute());

// Q21. Search by name Employee ka naam search input mein diya gaya hai.
//  List mein matching employee dhoondo, case-insensitive search ke saath.
//  Hint: toLowerCase() se dono strings ko normalize karo, phir includes() ya find() use karo.

 
// i done this without find and its alsso perfect . 

const searchEmployee = (searchEmployeeName)=>{
  return employees.filter((employeeName)=>{
   return employeeName.name
   })
}
console.log(searchEmployee(sara));

// now lets do it with inculde to check wheter the input value machtes the name we have in array .

const checkSearchEmployeeNameWithInclude = (searchEmployee)=>{
    return employees.filter((employeeName)=>{
     return employeeName.name.toLowerCase().includes(searchEmployee.toLowerCase())
    })
}

console.log(checkSearchEmployeeName("A")); 

// theres an exception that sara will also written in output cuz it has "a" .
// but if we want that we search  "a" so only those names comes which starting letter is "a".
// for that theres a javascrippt method startsWith() similarly like include but output is different.

const checkSearchEmployeeNameBy_startsWith = (searchEmployee)=>{
    return employees.filter((employeeName)=>{
     return employeeName.name.toLowerCase().startsWith(searchEmployee.toLowerCase())
    })
}

console.log(checkSearchEmployeeNameBy_startsWith("A")); 


