// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 83.12,
      date: new Date(2021, 4, 10),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 56.14,
      date: new Date(2021, 4, 10),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 293.47,
      date: new Date(2021, 4, 10),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 350,
      date: new Date(2021, 4, 10),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
