let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
// console.log(firstTea);

let cities = ["Tokyo", "London", "Paris","New York"];
let favCity = cities[2];
// console.log(favCity);

let teaTypes = ["herbal tea", "white tea", "masala tea"]
teaTypes[1]="jasmine tea";
// console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha","earl grey"];

let lastOrder = teaOrders.pop();
// console.log(lastOrder);

//soft copy arrays
let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas;
// console.log(softCopyTeas);
// console.log(popularTeas);

//hard copy arrays
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);


let euroCities =["Paris","Rome"]
let asianCities = ["Tokyo", "India"];

// let worldCities = euroCities + asianCities; //--> Paris,RomeTokyo,India(converts to string)
// let worldCities = [euroCities, asianCities]; //--> [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'India' ] ] (creates a 2D arrays)

let worldCities = euroCities.concat(asianCities);
// console.log(worldCities);


let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength);

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);



