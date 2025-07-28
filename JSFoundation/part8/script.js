//example 1

document.getElementById("changeTextButton").addEventListener('click',function(){
    // console.log(this);
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph);
    // console.log(paragraph.textContent);
    paragraph.textContent="The paragraph is changed"
});

//example 2

document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let cities =document.getElementById("citiesList");
    // console.log(cities);
    citiesList.firstElementChild.classList.add("highlight");
});


//example 3
document.getElementById("changeOrder").addEventListener("click", function() {
    let coffee =document.getElementById("coffeeType");
    // console.log(coffee);
    coffee.textContent="Espresso";
    coffee.style.backgroundColor="brown";
    coffee.style.padding = "5px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {

    let newItem =document.createElement('li')
    newItem.textContent="Eggs"

    document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5
document.getElementById("removeLastTrack").addEventListener("click", function(){
    let taskList= document.getElementById("taskList");
    taskList.lastElementChild.remove();
});

//example 6
document.getElementById("clickMeButton").addEventListener("dblclick]", function(){
    alert("atul")
});

//example 7

document.getElementById("teaList").addEventListener("click",function(event){
    // console.log(event.target);
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected " + event.target.textContent)
    }
})

//example 8
document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    // console.log(feedback);
    document.getElementById("feedbackDisplay").textContent=`Feedback is: ${feedback}`
})

//example 9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent="DOM fully loaded"
})

//example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText=document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})