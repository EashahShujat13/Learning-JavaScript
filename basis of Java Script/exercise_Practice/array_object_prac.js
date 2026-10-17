// Easy Level Exercises

// 1. Create a Basic Object

// Create an object called student with:

// name
// age
// course
// city

const studuent = {
    name :"Aisha",
    age : 19,
    course : "Web Developement",
    city : "Karachi",
}

console.log(studuent)

// 2. Access Object Properties

const student = {
    name: "Ayesha",
    age: 20,
    course: "JavaScript",
    city: "Karachi"
}

// Print:

// Student's name using []
// Student's age using .
// Student's course using []

console.log(student["name"]);
console.log(student.age);
console.log(student["course"]);

// 3. Modify Object Values

// Create:

const product = {
    name: "Laptop",
    price: 120000,
    quantity: 5
}

// Now:

// Change the price to 135000
// Change the quantity to 10
// Add a new property called brand
// Print the updated object.

console.log(product.price=135000 , product.quantity=10 , product.brand="Dell" , product);

// 5. Basic Array

// Create an array containing:

// "Apple"
// "Banana"
// "Mango"
// "Orange"
// "Grapes"

// Print:

// Complete array
// First element
// Last element

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// 9. indexOf()

const numbers = [5, 10, 15, 20, 25];
console.log(numbers.indexOf(20));


// Hard Level Exercises

// 1. Product + Array

// Create an array containing 3 product objects.

// Each product should have:

// productName
// price
// quantity
// category

// Then access and print the name and price of the second product.

const products = [
    {
        productName: "Laptop",
        price: 120000,
        quantity: 5,
        category: "Electronics"
    },
    {
        productName: "Smartphone",
        price: 80000,
        quantity: 10,
        category: "Electronics"
    },
    {
        productName: "Tablet",
        price: 50000,
        quantity: 8,
        category: "Electronics"
    }
];

console.log(products[1].productName);
console.log(products[1].price);

// Then:

// Add a new product using push().
// Remove the last product using pop().
// Remove the first product using shift().
// Add a new product at the beginning using unshift().
// Print the final array.



products.push({
    productName: "Headphones",
    price: 15000,
    quantity: 15,
    category: "Electronics"
})

console.log(products.length[3]) // not working ?

console.log(products.pop());
console.log(products.shift());

console.log(products.unshift({
    productName: "Smartwatch",
    price: 20000,
    quantity: 12,
    category: "Electronics"
})

)

console.log(products);

// Product Array + Slice

// Use slice() to create a new array containing only products:
// 2nd → 4th
const selectedProducts = products.slice(1, 4);
// Then check whether the original product array changed.
console.log("Original array:", products);
console.log("Selected products:", selectedProducts);


// 2. Product Array + Splice

// Create:

const electric_Products = [
    "Laptop",
    "Mobile",
    "Tablet",
    "Watch",
    "Headphones"
];

// Using splice():

// Remove "Tablet"
// Add "Camera" in its place.


const selectedItem = electric_Products.splice(electric_Products.indexOf("Tablet"), 1, "Camera");
console.log(electric_Products);

console.log("Original array:", electric_Products);
console.log("Selected Item:", selectedItem);


// 3. Merge Two Product Arrays

// Create:

const electronics = ["Laptop", "Mobile", "Tablet"];
const accessories = ["Mouse", "Keyboard", "Headphones"];

// Create a third array containing all products using the spread operator.

const allProducts = [...electronics, ...accessories];
console.log(allProducts);

// Do not modify either original array.

// 4. Nested Categories

// Create:

const categories = [
    ["Laptop", "Mobile"],
    ["Shirt", "Jeans"],
    ["Shoes", ["Sneakers", "Boots"]]
];

// Flatten it completely using flat().

const flattenedCategories = categories.flat(Infinity);
console.log(flattenedCategories);