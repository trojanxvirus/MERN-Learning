// let myTea = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];

// for (let i = 0; i < myTea.length; i++) {
//   if(myTea[i]==='chai'){
//     break;
//   }  
//   selectedTeas.push(myTea[i]);
// }
// console.log(selectedTeas);


// let cities = ["London","New York","Paris","Berlin"];
// let visitedCities = [];

// for(let i=0;i<cities.length;i++){
//     if(cities[i]==="Paris"){
//         continue;
//     }
//     visitedCities.push(cities[i]);
// }
// console.log(visitedCities);


//For of loop
// let number =[1,2,3,4,5];
// let smallNumbers=[];

// for (const num of number) {
//     if(num==4){
//         break;
//     }
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);

// let teas = ["chai","green tea","herbal tea","black tea"];
// let prefTeas = [];

// for(const tea of teas){
//     if(tea==="herbal tea"){
//         continue;
//     }
//     prefTeas.push(tea);
// }
// console.log(prefTeas);

//<----For-in loop---->

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris":2200000,
    "Berlin": 3500000
};

let cityNewPopulations = {};
for (const city in citiesPopulation) {
   //key: value
   if(city=="Berlin"){
    break;
   }
   cityNewPopulations[city]=citiesPopulation[city];
}
// console.log(cityNewPopulations);

let worldCities = {
    "Sydney":5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris":2200000
};

let largeCities ={};

for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue;
    }
    largeCities[city]=worldCities[city];
}
// console.log(largeCities);

//<------ForEach Loop ------->
let teasCollection=["earl gray","green tea","chai","oolong tea"];
let availableTeas = [];

teasCollection.forEach(tea => {
    if(tea==="chai"){
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);

let myCities = ["Berlin","Tokyo","Sydney","Paris"];
let travelledCities =[];

myCities.forEach(city => {
    if(city==="Berlin"){
        return;
    }
    travelledCities.push(city);
});
// console.log(travelledCities);

let numbers = [2,5,7,9];
let doubledNumbers = [];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]==7){
        continue;
    }
    doubledNumbers.push(numbers[i]*2);
}
// console.log(doubledNumbers);


let teaCollection = ["chai","green tea","jasmine tea","herbal tea"];
let shortTeas = [];

for (const tea of teaCollection) {
    if(tea.length>10){
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);



