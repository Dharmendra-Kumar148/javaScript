let score = "33abc"

console.log(typeof score);
console.log(score);

let valueInNo = Number(score)

console.log(typeof valueInNo);
console.log(valueInNo);

/*
"33" => 33
"33abc" => NaN
true => 1; 
false => 0
*/


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true
0 => false
"" => false
"abhay" => true
*/


let someNumber = 33
let stringNo = String(someNumber)
console.log(stringNo);
console.log(typeof stringNo);