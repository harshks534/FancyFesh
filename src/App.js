import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Checkout from "./Checkout";
import YourPrimeAccount from "./YourPrimeAccount";
import Hom from "./Hom";
import Logout from "./Logout";
import Stripepay from "./Stripes/Stripepay";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header/><Home/></>}  />
      <Route path="/checkout" element={<Checkout/>}  />
      <Route path="/Login" element={<Login/>}  />
      <Route path="/Signup" element={<Signup/>}  />
      <Route path="/YourPrimeAccount" element={<YourPrimeAccount/>}  />
      <Route path="/Hom" element={<Hom/>}  />
      <Route path="/Logout" element={<Logout/>}  />
      <Route path="/Stripepay" element={<Stripepay/>}  />
    </Routes>
  </BrowserRouter>
  );
}

export default App;