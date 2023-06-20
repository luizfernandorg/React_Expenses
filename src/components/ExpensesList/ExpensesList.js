import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }
    
    return (
        <ul className='expenses-list'>
          {
                props.items.map( (item) => {
                    
                    const selectYear = item.date.getFullYear();
                    
                    if((props.year === selectYear && props.year !== 0) || props.year === 0 )
                    {
                        return <ExpenseItem
                                key={item.id}
                                title={item.title}
                                amount={item.amount} 
                                date={item.date}/>
                    }
                })
            }
        </ul>
    );
}

export default ExpensesList;