
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
