import React, { useState } from "react";
import "./Products.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Prodcuts(props) {
  const [enteredYear, setYear] = useState("2020");
  const filterHandler = (year) => {
    setYear(year);
  };

const filteredExpenses = props.items.filter(expense =>{
  return expense.date.getFullYear().toString() === enteredYear;
});


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onAddFilter={filterHandler} />
       <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList stuff = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Prodcuts;
