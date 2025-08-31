import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

  return (
    <div className='w-40'>
      <h1>History</h1>
      <div>{transactions.map((transaction) => (
        <li key={transaction.id} className='list-none flex justify-between shadow-md p-2'>{transaction.text}<span>${transaction.amount}</span> <button className='bg-red-700 text-white px-1'>X</button></li>
      ))}</div>
    </div>
  );
}

export default TransactionList
