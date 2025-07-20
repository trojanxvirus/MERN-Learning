//Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());


// console.log(typeof(balance));
// console.log(typeof(anotherBalance));

//null and undefined

let firstName=null;
let lastName = undefined;
// console.log(firstName);
// console.log(lastName);

//String

let myString = "hello";
let myString1= 'Hola';
let userName = "Atul";

let oldGreet = myString + " Atul";
// console.log(oldGreet);


let greetMessage = `Hello ${userName} !`; //String Interpolation

let demoOne = `Value is ${2*2}`;
// console.log(demoOne);

// console.log(greetMessage);

//SYMBOL -> that's guaranteed to be unique
let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1==sm2); //-->false;
console.log(sm1); //-->Symbol()

let sym1=Symbol("Atul");
let sym2=Symbol("Atul");
console.log(sym1==sym2); //-->false



