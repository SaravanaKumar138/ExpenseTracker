import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalState';



const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
  return (
    <div>
      <h1>Add New Transaction</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input
            type="text"
            value={text}
            placeholder="Enter text"
            onChange={(e) => setText(e.target.value)}
            className="border-2 p-1 w-52"
          ></input>
        </div>
        <div>
          <h1>Amount</h1>
          <input
            type="text"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="border-2 p-1 w-52"
          />
        </div>
        <button className='bg-purple-400 px-2 py-2 font-semibold rounded-md' onClick={() => addTransaction({id:Date.now(), text: text, amount: parseInt(amount)})}>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction
