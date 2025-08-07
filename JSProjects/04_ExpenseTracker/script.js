document.addEventListener('DOMContentLoaded',() =>{
    const expenseForm = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const expenseBtn = document.getElementsByClassName("add-exp");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount = calculateTotal();

    renderExpenses();

    expenseForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value.trim());

        if(name!="" && !isNaN(amount) && amount>0){
            const newExpense = {
                id:Date.now(),
                name: name,
                amount: amount,
            }

            expenses.push(newExpense);
            saveExpensesLocal();
            renderExpenses();
            updateTotal();

            //clear input
            expenseName.value="";
            expenseAmount.value= "";
        } 

    });


    function calculateTotal(){
        return expenses.reduce((sum, expense)=>(sum + expense.amount),0)
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function saveExpensesLocal(){
        localStorage.setItem('expenses', JSON.stringify(expenses));

    }

    function renderExpenses(){
        expenseList.innerHTML="";
        expenses.forEach(expense => {
            const li =document.createElement('li');
            li.innerHTML = `
            ${expense.name} - $${expense.amount}
            <button data-id="${expense.id}">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    expenseList.addEventListener('click',(e)=>{
        if(e.target.tagName === "BUTTON"){
            const expenseId =parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== expenseId);

            saveExpensesLocal();
            renderExpenses();
            updateTotal();
        }
    })

})