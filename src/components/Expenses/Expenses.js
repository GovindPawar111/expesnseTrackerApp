import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart'
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

 const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList expenses={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
