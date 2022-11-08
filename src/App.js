import "./App.css";
import React from "react";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Product from "./Product";
import AddProduct from "./AddProduct";
 import UpdateProduct from "./UpdateProduct";
 import SignUp from "./SignUp";
 import Login from "./Login";
 import Profile from "./Profile";
import PrivateComponent from "./PrivateComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Nav /> 
         
        <Routes>
          <Route element={<PrivateComponent />}>  
          <Route  path="/"  element={<Product />} />
          <Route  path="add"  element={<AddProduct />} /> 
          <Route  path="/update"  element={<UpdateProduct />} />
          {/* <Route  path="/logout"  element={<SignUp />} /> */}
          <Route  path="/profile"  element={<Profile />} />
          </Route>
          <Route  path="/signup"  element={<SignUp />} /> 
          <Route path ="/login"   element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
