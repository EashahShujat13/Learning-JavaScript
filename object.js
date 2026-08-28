// What is object ?
// Object is a collection of data into json format .
// Object was created just like a variable but it perform way more differnt funtion in it .
// Object was identified by {} brackets that  hold data into key value pair.

// Lets create basic obj.
const basic_Obj = {
    key : "value",
}
console.log(basic_Obj) // print the entire obj


// Product data obj.
const product_Collection = {
    productName : "Dell Laptop",
    price : 148999,
    description : "Dell Laptop core i4 , 8GB RAM , 2GB ROM",
    quantity : 19,
    productCreatedAT : "1:45pm - 14-09-2020",
    productUpdatedAt : "8:38am - 23-01-2026",
}
console.log(product_Collection);

// Wrong method to acsses specif key.
// console.log(product_Collection(price));   this always gives error cuz to acsses specific key always use [] brackets,

//Correct method to acsses specific key by using [] brackets  with "" cotation cuz obj always gives key as string.
console.log(product_Collection["productName"]) 
console.log(product_Collection.productName) // we can also accsess specific key value  but in this value accsessing object outer variables cannot accsess.


//         Interview questions?

// Ques1. Accses symbol value by using obj?

const symbolReviews = Symbol("Reviews")

const product_Collection_Using_Symbol = {
    productName : "Dell Laptop",
    price : 148999,
    description : "Dell Laptop core i4 , 8GB RAM , 2GB ROM",
    quantity : 19,
    [symbolReviews] : "4.9++ 🌟🌟🌟🌟",
    productCreatedAT : "1:45pm - 14-09-2020",
    productUpdatedAt : "8:38am - 23-01-2026",
}

console.log(symbolReviews)
