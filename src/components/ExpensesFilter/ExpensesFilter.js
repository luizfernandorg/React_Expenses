import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const years = [];
  const changeHandler = (event) => {
    const yearSelected = parseInt(event.target.value);
    props.onChangeYear(yearSelected)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>

        <select defaultValue={props.setYear} onChange={changeHandler}>
          <option value='0'>All Years</option>
          {
            props.items.map( item => {
              const year = item.date.getFullYear();
              
              if(years.indexOf(year) === -1)
              {
                years.push(year);
                return <option key={item.id} value={year}>{year}</option>
              }
            })
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;