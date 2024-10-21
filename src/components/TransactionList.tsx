import {Transaction} from "./types";

interface TransactionListProps {
    transactions: Transaction[];
  }
  
  const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
      <div>
        <h2>Transaction History</h2>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <strong>{transaction.description}</strong>: {transaction.type} of {transaction.amount.toFixed(2)} Rs on {transaction.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default TransactionList;