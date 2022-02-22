import Home from './pages/homepage/homepage.component';
import { Routes, Route } from "react-router-dom"
import React from 'react';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signIn-and-signUp/signIn-and-signUp.component";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
