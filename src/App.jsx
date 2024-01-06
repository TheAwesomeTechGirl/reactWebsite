import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import Services from './Components/Pages/Services.jsx';
import Products from './Components/Pages/Products.jsx';
import SignUp from './Components/Pages/SignUp.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
