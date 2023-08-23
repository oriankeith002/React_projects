import React, {useState} from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => { 

    const [title, setNewTitle] = useState(props.title);
    console.log('Expense item evaluated by React');

    const clickHandler = () => {
        setNewTitle('updated!');
        console.log(title);
    }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;