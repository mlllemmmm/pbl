
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/pages/Home';
import LocalFurniture from "./components/pages/LocalFurniture";
import SecondHand from "./components/pages/SecondHand";
import Renting from "./components/pages/Renting";
import ProductDetails from "./components/pages/ProductDetails";
import ShoppingCart from "./components/pages/ShoppingCart";
function App() {
  return (
    <>
      <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/local-furniture" element={<LocalFurniture />} />
    <Route path="/secondhand" element={<SecondHand/>} />
    <Route path="/renting" element={<Renting/>} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/shopping-cart" element={<ShoppingCart/>} />

    </Routes>
    </Router>
    </>
  );
}

export default App;
