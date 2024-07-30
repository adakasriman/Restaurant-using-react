import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantView from './components/restaurant/RestaurantView';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/restaurant/:id" element={<RestaurantView />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
