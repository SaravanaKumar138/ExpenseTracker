import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState';

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);
      console.log(income, expense);
  return (
    <div className="flex gap-5">
      <div className="border-2 border-black border-none p-2 rounded-xl shadow-lg w-1/2">
        <h1 className='text-green-500'>Income</h1>
        <h1>${income}</h1>
      </div>
      <div className="border-2 border-black  border-none p-2 rounded-xl shadow-lg w-1/2">
        <h1 className='text-red-500'>Expense</h1>
        <h1>${expense}</h1>
      </div>
    </div>
  );
}

export default IncomeExpense
