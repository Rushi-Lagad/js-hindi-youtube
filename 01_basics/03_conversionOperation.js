let score = 33;

// console.log(typeof score);  // number
// console.log(typeof (score));    // number
//-----------------------------------------------------

let score1 = "33sdfgh";
let valueInNumber  = Number(score1)
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber);     // NAN  not a number 
//--------------------------------------------------------

//  "33" => 33
// "33dd" => NAN
// "true" => 1
// "false" => 0

//-----------------------------------------
let isLoggedIn = 1      // true
let isLoggedIn1 = ""    // false
let isLoggedIn2 = "Rushi"    // true
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//-----------------------------------------------
let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);          // 33
// console.log(typeof stringNumber);   // string

//----------------------Operations------------------------

let str1 = "Rushi"
let str2 = "Lagad"

// console.log(str1 + str2);
// console.log("1" + 2 + 3)    // 123
// console.log(1 + 2 + "3");   // 33

let num1, num2, num3
num1 = num2 = num3 = 2 + 34

let gameCounter = 100;
gameCounter++
console.log(gameCounter);
// ++gameCounter
// console.log(gameCounter);