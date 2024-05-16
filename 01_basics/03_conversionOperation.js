let score = 33;

console.log(typeof score);  // number
console.log(typeof (score));    // number
//-----------------------------------------------------

let score1 = "33sdfgh";
let valueInNumber  = Number(score1)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);     // NAN  not a number 
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
console.log(booleanIsLoggedIn);

//-----------------------------------------------
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);          // 33
console.log(typeof stringNumber);   // string