import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

    // enterExpenseData as an agrument

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };

        console.log(expenseData);
        
        props.onAddExpense(expenseData); // passing data to App.js via props

    };

    return (
            <div className="new-expense">
                {/* new custom prop (onSaveExpenseDate) pointing to event listener function */}
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
            </div>
        );
};

export default NewExpense;