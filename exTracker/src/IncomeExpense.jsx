import React from 'react'

const IncomeExpense = () => {
  return (
    <div className="flex gap-5">
      <div className="border-2 border-black border-none p-2 rounded-xl shadow-lg">
        <h1 className='text-green-500'>Income</h1>
        <h1>$0.00</h1>
      </div>
      <div className="border-2 border-black  border-none p-2 rounded-xl shadow-lg">
        <h1 className='text-red-500'>Expense</h1>
        <h1>$0.00</h1>
      </div>
    </div>
  );
}

export default IncomeExpense
