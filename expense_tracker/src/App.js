import ExpenseItem from "./components/ExpenseItem";


function App() {

  // defining external externally , creating sample array of 4 expenses
  const expenses = [
    {id:'e1', title:'Car Insurance', amount: 294, date: new Date(2023,8,8),},
    {id:'e2', title:'Phone Insurance', amount: 794, date: new Date(2023,4,4),},
    {id:'e3', title:'Skin Insurance', amount: 394, date: new Date(2023,7,8),},
    {id:'e4', title:'Home Insurance', amount: 204, date: new Date(2023,9,8),},
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
        <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
        <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
