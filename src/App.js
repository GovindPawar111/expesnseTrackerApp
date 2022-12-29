import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INIT_LIST = [
  {
    id: "r1",
    title: "Car Insurance",
    amount: 294.56,
    date: new Date(2022, 11, 28),
  },
  {
    id: "r2",
    title: "Food",
    amount: 384.56,
    date: new Date(2022, 2, 2),
  },
  {
    id: "r3",
    title: "Health Insurance",
    amount: 29.56,
    date: new Date(2022, 10, 18),
  },
  {
    id: "r4",
    title: "Rent",
    amount: 150,
    date: new Date(2021, 5, 9),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INIT_LIST);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
