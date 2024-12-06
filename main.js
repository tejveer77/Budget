const transactions = [];
const addTransaction = (description, amount) => {
    transactions.push({ description, amount });
};
const removeTransaction = (index) => {
    if (index >= 0 && index < transactions.length) {
        transactions.splice(index, 1);
    }
};
const displayTransactions = () => {
    return transactions.map((transaction, index) => {
        return `${index + 1}: ${transaction.description} - $${transaction.amount}`;
    });
};
const calculateBalance = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
};
export { transactions, addTransaction, displayTransactions, calculateBalance };
