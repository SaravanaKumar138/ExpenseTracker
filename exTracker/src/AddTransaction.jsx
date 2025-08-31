import React from 'react'

const AddTransaction = () => {

    
  return (
    <div>
      <h1>Add Transaction</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter text"
            className="border-2 p-1"
          ></input>
        </div>
        <div>
          <h1>Amount</h1>
          <input
            type="text"
            placeholder="Enter amount"
            className="border-2 p-1"
          />
        </div>
      </form>
    </div>
  );
}

export default AddTransaction
