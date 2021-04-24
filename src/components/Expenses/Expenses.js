import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenseYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesList items={filteredExpenseYear} />
      </Card>
    </div>
  );
};

export default Expenses;
