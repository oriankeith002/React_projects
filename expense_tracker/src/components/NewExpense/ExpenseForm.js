import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // working with multiple states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //listening for user input

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    const submitHandler = event => {
        event.preventDefault();

        // making object that will contain our data that will be stored.
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };


        // adding our custom prop and passing data as an argument to be received
        // in NewExpense component
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle(''); // setting it back to empty string
        setEnteredAmount('');
        setEnteredDate('');


    };



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text" 
                        value = {enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number"
                        min="0.01" 
                        step="0.01" 
                        value = {enteredAmount}
                        onChange = {amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2022-01-01" 
                        max="2022-12-31"
                        value = {enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div class="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;