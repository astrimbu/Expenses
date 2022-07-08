import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const onYearChangeHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onYearChange={onYearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
