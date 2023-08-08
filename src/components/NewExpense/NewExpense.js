import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
  const [addExpense, setAddExpense] = useState(false);
const expenseDataHandler = (enteredExpenseData)=>{



  const expenseData= {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  props.onAddExpense(expenseData);
};

const addExpenseHandler = ()=>{
  setAddExpense(true);
};

const noExpenseHandler = ()=>{
  setAddExpense(false);
};



return(
  <div className='new-expense'>
    {!addExpense && <button onClick={addExpenseHandler}>Add new expense</button>}
    {addExpense && <ExpenseForm onExpenseData = {expenseDataHandler} onCancel={noExpenseHandler}/>}
  </div>

);

}

export default NewExpense;