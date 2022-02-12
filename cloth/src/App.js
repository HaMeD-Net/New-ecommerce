import Home from './pages/homepage/homepage.component';
import { Routes, Route } from "react-router-dom"
import React from 'react';
import ShopPage from './components/shop/shop.component';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
