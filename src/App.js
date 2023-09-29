// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './Navbar';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addexpense" element={<AddExpensePage />} />
          <Route path="/editexpense" element={<EditExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
