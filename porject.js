import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import Register from './components/Register';
import TravelPlanner from './components/TravelPlanner';
import Booking from './components/Booking';
import Hotels from './components/Hotels';
import Wallet from './components/Wallet';
import Attractions from './components/Attractions';
import History from './components/History';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center">🌍 Virtual Travel Guide</h2>
        <nav className="nav nav-pills justify-content-center mb-4">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/planner">Travel Planner</Link>
          <Link className="nav-link" to="/booking">Booking</Link>
          <Link className="nav-link" to="/hotels">Hotels</Link>
          <Link className="nav-link" to="/attractions">Attractions</Link>
          <Link className="nav-link" to="/wallet">Wallet</Link>
          <Link className="nav-link" to="/history">History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/planner" element={<TravelPlanner />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;