import React, { useState } from 'react';
import {Transaction} from "./types";
interface TransactionFormProps {
    onAddTransaction: (transaction: Transaction) => void;
  }
  
  const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<'debit' | 'credit'>('debit');
    const [date, setDate] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newTransaction: Transaction = {
        id: Math.random(), // Temporary ID generation
        description,
        amount,
        type,
        date
      };
      onAddTransaction(newTransaction);
      resetForm();
    };
  
    const resetForm = () => {
      setDescription('');
      setAmount(0);
      setType('debit');
      setDate('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Add New Transaction</h3>
        <label>Description: </label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <br />
  
        <label>Amount: </label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
          required 
        />
        <br />
  
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value as 'debit' | 'credit')}>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
        <br />
  
        <label>Date: </label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        <br />
  
        <button type="submit">Add Transaction</button>
      </form>
    );
  };
  export default TransactionForm;