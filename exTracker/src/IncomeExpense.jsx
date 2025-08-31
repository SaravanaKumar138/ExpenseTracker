import React from 'react'

const IncomeExpense = () => {
  return (
    <div className="flex gap-5">
      <div className="border-2 border-black bg-green-400 border-none p-2 rounded-2xl">
        <h1>Income</h1>
        <h1>$0.00</h1>
      </div>
      <div className="border-2 border-black bg-red-400 border-none p-2 rounded-2xl">
        <h1>Expense</h1>
        <h1>$0.00</h1>
      </div>
    </div>
  );
}

export default IncomeExpense
