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
    }  
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
