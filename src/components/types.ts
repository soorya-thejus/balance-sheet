// src/types/types.ts
export interface Transaction {
    id: number;
    description: string;
    amount: number;
    type: 'debit' | 'credit'; // Either debit or credit
    date: string; // Format YYYY-MM-DD
  }
export default Transaction;