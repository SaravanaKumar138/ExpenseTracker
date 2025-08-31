import React, { useState } from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount,setAmount] = useState(0);
  return (
    <div>
      <h1>Add New Transaction</h1>
      <form>
        <div>
          <input
            type="text"
            value={text}
            placeholder="Enter text"
            onChange={(e) => setText(e.target.value)}
            className="border-2 p-1"
          ></input>
        </div>
        <div>
          <h1>Amount</h1>
          <input
            type="text"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="border-2 p-1"
          />
        </div>
        <button className='bg-purple-400 px-2 py-2 font-semibold rounded-md'>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction
