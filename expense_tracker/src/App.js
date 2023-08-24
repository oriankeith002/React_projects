import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// defining external externally , creating sample array of 4 expenses
const DUMMY_EXPENSES = [
  {id:'e1', title:'Car Insurance', amount: 294, date: new Date(2023,8,8),},
  {id:'e2', title:'Phone Insurance', amount: 794, date: new Date(2023,4,4),},
  {id:'e3', title:'Skin Insurance', amount: 394, date: new Date(2023,7,8),},
  {id:'e4', title:'Home Insurance', amount: 204, date: new Date(2023,9,8),},
];

const App = () => {

  // we want to display newly added data
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (  
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
