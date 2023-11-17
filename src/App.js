import React from 'react';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {
          <Route path="/home" element={<Home />} />
        }
      </Routes>
    </Router>
  );
}

export default App;
