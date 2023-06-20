import React from "react";
import { useState } from "react";
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses (props) {
    const [year, setYear] = useState(0)
    
    const onChangerHandler = (newYear) => {
        setYear(newYear);
    }
    const filteredExpenses = props.items.filter( (expense) => {
        if(year === 0)
        {
            return expense
        } else {
            return expense.date.getFullYear() === year
        }
    })
    
    return (
        <Card className="expenses">
            <ExpensesFilter setYear={year} onChangeYear={onChangerHandler} items={props.items}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList year={year} items={props.items} />
        </Card>
    )
}

export default Expenses;