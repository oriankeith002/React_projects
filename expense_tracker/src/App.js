import Expenses from "./components/Expenses/Expenses";


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
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
