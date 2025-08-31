import { useState } from 'react'
import Header from './header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from './GlobalState'
function App() {


  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  )
}

export default App
