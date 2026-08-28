// What is array ?
// It is a collection of data that stores collection of objects.
// They are none-primitive type of javascript that holds multiple data into it .
// Arrays make shalow copy of its references.
// How single array is formed.

const array = [0,1,2,3,4,5]
console.log(array) // simple array
console.log(array[0]) // access first element of array


// Array Methods

// 1. push() - adds new element to the end of the array
array.push(6)
console.log(array) // [0,1,2,3,4,5,6]

// 2. pop() - removes the last element from the array
array.pop()
console.log(array) // [0,1,2,3,4,5]

// 3. shift() - removes the first element from the array
array.shift()
console.log(array) // [1,2,3,4,5]

// 4. unshift() - adds new element to the beginning of the array
array.unshift(0)
console.log(array) // [0,1,2,3,4,5]

// 5. indexOf() - returns the first index of the specified element in the array
console.log(array.indexOf(3)) // 3

// 6. includes() - checks if the array contains the specified element
console.log(array.includes(3)) // true

// 7. slice() - returns a shallow copy of a portion of an array into a new array object
// Means it does not modify the original array and returns a new array containing the selected elements.(Interview question)
// It takes two arguments, the start index and the end index .
const newArray = array.slice(1, 4)
console.log(newArray) // [1,2,3]

// 8. splice() - returns two or more arguments, 
// It takes three arguments, the start index, the number of elements to remove, and the new elements to add.
// It modifies the original array and returns an array containing the removed elements. (Interview question)
array.splice(2, 1, 10) // removes 1 element at index 2 and adds 10
console.log(array) // [0,1,10,3,4,5]

// 9 . join() - joins all elements of an array into a string
const joinedArray = array.join('-')
console.log(joinedArray) // "0-1-10-3-4-5"

// 10. reverse() - reverses the order of the elements in an array
array.reverse()
console.log(array) // [5,4,3,10,1,0]

/// 11. concat() - merges two or more arrays into a new array
const array1 = [1,2,3]
const array2 = [4,5,6]
const mergedArray = array1.concat(array2)
console.log(mergedArray) // [1,2,3,4,5,6]
// 11.1 concat() - merges two or more arrays into a new array using spread operator
//      while it can be merdged by using another method called spread operator.
//      which is more efficient and faster than concat() method.
//      It can merdeg two or more arrays into a new array using spread operator.
//      SPread Operator
const mergArr = [...array1, ...array2]
console.log(mergedArray) // [1,2,3,4,5,6]

// 12. flat() - flattens a nested array into a single array
// It takes one argument, the depth level to flatten the array. (Interview question)
const nestedArray = [1,3,2,1,2,4,[5,8,11,],8]
const flatArray = nestedArray.flat(2)
console.log(flatArray) // [1,2,3,4,5,6]

// 12.1 If You are unawared of the depth level, you can use Infinity as the argument to flatten the array completely.(Interview ques)
const mostNestedArray = [1,2,4,[5,8,11,[8,23,4,5,7.8],3,3,9,0]]
const flatedArr = [mostNestedArray.flat(Infinity)]
console.log(flatedArr)


// 13 Exceptional Knowledge
// 13.1 isArray() - to questioning about a data or verifying it .
//      Tells weather a collection/var existed in array type .
//      That not a item indicator such as  isExistedArray.isArray("anum") by using isArray as an item founder to tell us does it existed in array it allways gives error.
const namesCollection = ["Ayesha","Ali","Sara","Usama"]
const isExistedArray = Array.isArray(namesCollection)
console.log(isExistedArray)


// 13.2 from() - it creates changeable value into array i.e string, number etc
//        It does not add variable into array or noninterable values.

const createArray = Array.from("Make These Lettera Into Array")
console.log(createArray)

// 13.3 of() - it creates a data of array that can hold variables .
let price = 300
let userName = "Sam"
let product = " Nike Shoe"

const createDataArray = Array.of(price,product,userName)
console.log(createDataArray)
