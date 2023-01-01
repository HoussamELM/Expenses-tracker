import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import ExpensesFilter from "./components/Expenses/ExpensesFilter"

import { useState } from "react";

const dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New pc (Gaming)',
    amount: 1950,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e6',
    title: 'New laptop',
    amount: 400,
    date: new Date(2022, 8, 12),
  },
  {
    id: 'e7',
    title: 'New headphones',
    amount: 100,
    date: new Date(2022, 11, 12),
  },
  {
    id: 'e8',
    title: 'New microphone',
    amount: 230,
    date: new Date(2022, 11, 12),
  },
  {
    id: 'e8',
    title: 'New bank account',
    amount: 5,
    date: new Date(2022, 12, 1),
  },
  {
    id: 'e9',
    title: 'GYM membership',
    amount: 40,
    date: new Date(2022, 12, 1),
  },


];

function App() {

 const [expenses,setExpenses] = useState(dummy)

  const addExpenseHandler = expense => {
setExpenses(prevExpenses => {
  return [expense, ...prevExpenses]
})
console.log("added!")
  }

  return (
    <div>
      <NewExpense onSaveExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
