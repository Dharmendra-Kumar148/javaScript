// Primitive

// 7 types :String, Number, Boolean, null, undefined, Symbol, BigInt
const  score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);




// Non-Primitive Or Reference type
 
// Array ,Objects ,Function

const heros = ['Shaktiman','naagraj','doga'];

let myobj = {
    name : 'abhay',
    age : 24
}

const myFunction = function(){
    console.log('hello world');
}

console.log(typeof myFunction);