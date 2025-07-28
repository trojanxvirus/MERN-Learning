//Asynchronous JS --> having pause ->(network calls, write/read files, time fn, user input,....etc)

function sayHello(){
    console.log("I would like to say HELLO!");
    
}

console.log("Atul");


setTimeout(()=>{
    sayHello();
}, 4000);

console.log("Tushar");

//Event Loop

//Closyre in JS