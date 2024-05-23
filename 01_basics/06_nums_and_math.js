 const score = 400

 const balance = new Number(100)
//  console.log(balance);
//  console.log(balance.toString().length);    //3
//  console.log(balance.toFixed(2));   // 100.00

//  const otherNumber = 23.5678
//  console.log(otherNumber.toPrecision(3));   // 23.6

//  const otherNumber1 = 123.5678
//  console.log(otherNumber1.toPrecision(3));  // 124

//  const hundreds = 1000000;
//  console.log(hundreds.toLocaleString());    //1,000,000
//  console.log(hundreds.toLocaleString('en-IN'));    //10,00,000

 /////////////////  MATHS   //////////////////////////

// console.log(Math);
// console.log(Math.abs(-4));  // negative converts positive
// console.log(Math.round(4.6));   // 5
// console.log(Math.ceil(4.2));   // 5
// console.log(Math.floor(4.9));   // 4
// console.log(Math.min(2,3,5,1)); // 1

console.log(Math.random());  // 0 to 1 ke andr value aati hai
console.log(Math.random()*10);  //
console.log(Math.random()*10 + 1);  //

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);