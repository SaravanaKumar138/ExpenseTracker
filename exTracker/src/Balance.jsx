import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const total = transactions.reduce((acc, t) => (acc + t.amount), 0);
 
  return (
    <div className="text-xl font-semibold">
      YOUR BALANCE <div>${total}</div>
    </div>
  );
}

export default Balance
