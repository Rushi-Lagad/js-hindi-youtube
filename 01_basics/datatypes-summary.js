//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId);

const bigNumber = 123454567n;

// Reference Type / Non Primitive

// Array, Objects, Functions

const heros = ["rushi", "mayur"];

let myObj = {
    name: "Rushi",
    age: 28
}

const myFunction = function () {
    console.log("Hello");
}
myFunction()

console.log(typeof heros);

//--------------------------------------------

// Stack(Primitive) => Copy milti hai
// & Heap(Non-primitive)  => reference milta hai

let userOne = {
    email: "rushi@gmail.com"
}

let userTwo = userOne
userTwo.email = "rushikesh@gmail.com"

console.log(userOne);
console.log(userTwo);