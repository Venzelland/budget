import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
    return (
        <div>
            <h1>Семейный бюджет</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/income-list">Income List</Link>
                    </li>
                    <li>
                        <Link to="/income-form">Income Form</Link>
                    </li>
                    <li>
                        <Link to="/expense-list">Expense List</Link>
                    </li>
                    <li>
                        <Link to="/expense-form">Expense Form</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/income-list" element={<IncomeList />} />
                <Route path="/income-form" element={<IncomeForm />} />
                <Route path="/expense-list" element={<ExpenseList />} />
                <Route path="/expense-form" element={<ExpenseForm />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

const Home = () => {
    return <h2>Welcome to Family Budget App</h2>;
};

export default App;
