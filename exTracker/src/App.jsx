import { useState } from 'react'
import Header from './header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from './GlobalState'
import Reducer from './Reducer'
function App() {


  return (
    <div className='flex flex-col gap-2 justify-center items-center '>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
      <Reducer />
    </div>
  );
}

export default App
