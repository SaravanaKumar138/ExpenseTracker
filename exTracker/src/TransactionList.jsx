import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState';

const TransactionList = () => {
    const {transactions, deleteTransaction} = useContext(GlobalContext);

  return (
    <div className="w-52">
      <h1 className="font-semibold p-2">History</h1>
      <div>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`list-none flex justify-between shadow-md p-2 `}
          >
            {transaction.text}
            <span className={`${transaction.amount > 0 ? "text-green-400" : "text-red-400"}`}>
              ${transaction.amount}
            </span>{" "}
            <button className="bg-red-700 text-white px-1 cursor-pointer" onClick={() => deleteTransaction(transaction.id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TransactionList
