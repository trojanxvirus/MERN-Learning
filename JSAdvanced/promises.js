//Promise Creation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data Fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}
//How do we consume promise

// let response = fetchData();
// console.log(response);
fetchData()
    .then((data)=> console.log(data))
    .catch((error)=>console.error(error))


