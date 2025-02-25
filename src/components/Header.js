import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
      <header>
        <h1>CookCraft</h1>
        <div className="container">
        <Link to="/"> <button className="head-btn">HOME</button></Link>
        <Link to="/login"> <button className="head-btn">LOGIN</button></Link>
        <Link to="/SignupForm"> <button className="head-btn">SIGN UP</button></Link>
        </div>
        </header>

    );
  }
  
  export default Header;
  