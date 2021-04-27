import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
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
        <ExpensesChart expenses={filteredExpenseYear} />
        <ExpensesList items={filteredExpenseYear} />
      </Card>
    </div>
  );
};

export default Expenses;
