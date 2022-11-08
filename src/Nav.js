import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Nav = () => {
  const auth = localStorage.getItem("userInfo");
  const navigate = useNavigate();
  const logout = () => {
    console.log("logout button is working...");
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      <ul className="nav-bar">
      {

      }
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>

        {/* <li>
          <Link to="/logout">Logout</Link>
        </li> */}
        <li>
          <Link to="/profile">Profile</Link>
        </li>

        {
          auth ? <li><Link onClick={logout} to="/signup">Logout</Link></li> 
          :
          <>
            <li><Link to="/signup">sigUp</Link></li>
            <li><Link to="/login">Login</Link></li>
            </>
        }

        
      </ul>
    </>
  );
};

export default Nav;
