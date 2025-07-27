function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
// console.log(teaOrder);


function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);


//<-----Arrow Function ----->
// function greet(){}

// const greet = () => {}

// const calculateTotal = (price, quantity) => {
//     return price*quantity;
// }
const calculateTotal = (price,quantity) => price*quantity;
let totalCost = calculateTotal(10, 8);
// console.log(totalCost);

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}

let order =processTeaOrder(makeTea);
// console.log(order);

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker = createTeaMaker();
let res = teaMaker("green tea");
console.log(res);

