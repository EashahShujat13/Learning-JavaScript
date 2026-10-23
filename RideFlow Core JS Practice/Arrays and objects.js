// Level 03 Arrays aur objects

// Q11. Employees ke naam print karo Is array ke har employee ka naam print karo:
// hmny map use kiya h but hmaein function k andr return bhi lagana hoga taky function proper map return kry
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
// another method of which is correcct from gpt
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




// Q14. Employee names ko ek string mein joro Names ko is format mein combine karo: Ali | Sara | Ahmed. 
// Hint: Pehle names ki array banao ya extract karo,
//  phir join(" | ") use karo.


const employeeNamesFormat = ()=> 
    employees.map((employee)=>
    employee.name).join(" | ") ;

console.log(employeeNamesFormat());

// Q15. No-show count
//  Employees ki list mein count karo ke kitne employees ka status "no-show" hai.
//  Hint: filter() ke baad .length, ya loop mein counter increment karo.

const countEmployeePickupStatus = ()=>{
    return employees.filter((noshowStatus) => noshowStatus.pickupStatus === "no-show" ) ;
}

console.log(countEmployeePickupStatus());

// Q16. Duplicate employee IDs 
// IDs ki array di gayi hai:
//  [101, 102, 101, 103, 102]. Unique IDs ki array banao.
//  Hint: Set ke baare mein socho, ya har ID ko check karo ke woh pehle aa chuki hai ya nahi.

// Working without usind set.
// inculed() check kry g k id hay yh nahi uniqueid walay array m employeeIDs
const employeeIDs = [101, 102, 101, 103, 102];
const uniqueIDs = [] ; 
const removeDuplicateID = ()=>{
    for(let i = 0; i < employeeIDs.length; i++ ){
        if(!uniqueIDs.includes(employeeIDs[i])){
            uniqueIDs.push(employeeIDs[i]);
        }
    }
     return uniqueIDs ;
}

console.log(removeDuplicateID());