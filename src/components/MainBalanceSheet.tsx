import React, { useState } from 'react';
import TransactionForm from "./TransactionForm";
import TransactionList from './TransactionList';

// Define the structure for a transaction
interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'debit' | 'credit'; // Either debit or credit
  date: string; // Format YYYY-MM-DD
}

const BalanceSheet: React.FC = () => {
  // State for list of transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  // Add transaction (controlled component)
  const addTransaction = (transaction: Transaction) => {
    setTransactions(prev => [...prev, transaction]);
  };

  // Calculate the balance
  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'credit' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
  };

  // Get the balance
  const balance = calculateBalance();

  return (
    <div>
      <h1>Balance Sheet</h1>
      <p>Current Balance: {balance.toFixed(2)} Rs</p>

      {/* Form for adding transactions */}
      <TransactionForm onAddTransaction={addTransaction} />

      {/* Transaction List */}
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default BalanceSheet;
