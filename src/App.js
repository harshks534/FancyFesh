import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Checkout from "./Checkout";
import YourPrimeAccount from "./YourPrimeAccount";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header/><Home/></>}  />
      <Route path="/checkout" element={<Checkout/>}  />
      <Route path="/Login" element={<Login/>}  />
      <Route path="/Signup" element={<Signup/>}  />
      <Route path="/YourPrimeAccount" element={<YourPrimeAccount/>}  />
    </Routes>
  </BrowserRouter>
 
  );
  
 
 
}

export default App;