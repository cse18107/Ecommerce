import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const history = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    console.log(keyword);
    e.preventDefault();
    if (keyword.trim()) {
      history(`/products/${keyword}`);
    } else {
      history("/products");
    }
  };
  return (
    <div className="navbar-body">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-logo">
          Ecommarce
        </Link>
        {isSearching ? (
          <div className="input" style={{ display: "flex" }}>
            <input onChange={(e) => setKeyword(e.target.value)} />
            <button
              onClick={(e) => submitHandler(e)}
              style={{ marginLeft: "10px", width: "80px",borderRadius:"5px", border: "4px solid tomato",backgroundColor:"white",color:"tomato"}}
            >
              Search
            </button>
          </div>
        ) : (
          <div className="navbar-links">
            <NavLink to={"/"} className="n-links">
              Home
            </NavLink>
            <NavLink to={"/products"} className="n-links">
              Products
            </NavLink>
            <NavLink to={"/contact"} className="n-links">
              Contact
            </NavLink>
            <NavLink to={"/about"} className="n-links">
              About
            </NavLink>
          </div>
        )}
        <div className="navbar-icons">
          <p
            onClick={() => {
              setIsSearching(!isSearching);
            }}
            style={{ cursor: "pointer" }}
            className="n-icons"
          >
            Search
          </p>
          <Link to={"/cart"} className="n-icons">
            Cart
          </Link>
          <Link to={"/account"} className="n-icons">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};
