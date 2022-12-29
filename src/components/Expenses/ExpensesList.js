import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {

  if (props.expenses.length === 0) {
    return <p className="expenses-list__fallback">Found no expenses.</p>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;