// AddExpensePage.js
import React, { useState } from 'react';
import './addexpense.css'; // Import the addexpense.css file

const AddExpensePage = () => {
  const [expenseData, setExpenseData] = useState({
    expenseType: '',
    price: '',
    recipient: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your add expense logic here
  };

  return (
    <div className="add-expense-container">
      <h2 className="add-expense-heading">Add Expense</h2>
      <form className="add-expense-form" onSubmit={handleSubmit}>
        <div className="add-expense-input">
          <label htmlFor="expenseType">Expense Type:</label>
          <input
            type="text"
            name="expenseType"
            placeholder="Expense Type"
            value={expenseData.expenseType}
            onChange={handleChange}
          />
        </div>
        <div className="add-expense-input">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={expenseData.price}
            onChange={handleChange}
          />
        </div>
        <div className="add-expense-input">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            name="recipient"
            placeholder="Recipient"
            value={expenseData.recipient}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="add-expense-button">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpensePage;
