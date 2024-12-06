import { transactions, addTransaction, displayTransactions, calculateBalance } from './main.js';
function handleAddTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (description && !isNaN(amount)) {
        addTransaction(description, amount);
        updateDisplay();
        clearInputs();
    } else {
        alert("Please enter valid transaction details.");
    }
}
function updateDisplay() {
    const transactionList = document.getElementById("transaction-list");
    transactionList.innerHTML = "";
    displayTransactions().forEach(transaction => {
        const li = document.createElement("li");
        li.textContent = transaction;
        transactionList.appendChild(li);
    });
    document.getElementById("total-balance").textContent = calculateBalance().toFixed(2);
}
function clearInputs() {
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}
document.getElementById("add-transaction").addEventListener("click", handleAddTransaction);

