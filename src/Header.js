import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img src="./Tech Zone.png" className="header_logo" alt="Tech Zone"></img>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionl1">Hello Guest</span>
          <span className="header_optionl2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionl1">Return</span>
          <span className="header_optionl2"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionl1">Your</span>
          <span className="header_optionl2">Prime</span>
        </div>
        <div className="basket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="basketl2 headerCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;