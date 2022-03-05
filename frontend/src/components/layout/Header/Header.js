import React from 'react';
import './Header.css';
import {Link, NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <div className="navbar-body">
        <div className="navbar-container">
            <Link to={"/"} className="navbar-logo">Ecommarce</Link>
            <div className="navbar-links">
                <NavLink to={"/"} className="n-links">Home</NavLink>
                <NavLink to={"/products"} className="n-links">Product</NavLink>
                <NavLink to={"/contact"} className="n-links">Contact</NavLink>
                <NavLink to={"/about"} className="n-links">About</NavLink>
            </div>
            <div className="navbar-icons">
                <Link to={"/"} className="n-icons">Search</Link>
                <Link to={"/"} className="n-icons">Cart</Link>
                <Link to={"/"} className="n-icons">Account</Link>
            </div>

        </div>
    </div>
  )
}
