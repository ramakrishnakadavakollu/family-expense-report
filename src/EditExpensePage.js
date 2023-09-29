// EditExpensePage.js
import React, { useState } from 'react';
import './editexpense.css'; // Import the editexpense.css file

const EditExpensePage = () => {
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
    // Add your edit expense logic here
  };

  return (
    <div className="edit-expense-container">
      <h2 className="edit-expense-heading">Edit Expense</h2>
      <form className="edit-expense-form" onSubmit={handleSubmit}>
        <div className="edit-expense-input">
          <label htmlFor="expenseType">Expense Type:</label>
          <input
            type="text"
            name="expenseType"
            placeholder="Expense Type"
            value={expenseData.expenseType}
            onChange={handleChange}
          />
        </div>
        <div className="edit-expense-input">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={expenseData.price}
            onChange={handleChange}
          />
        </div>
        <div className="edit-expense-input">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            name="recipient"
            placeholder="Recipient"
            value={expenseData.recipient}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="edit-expense-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditExpensePage;
