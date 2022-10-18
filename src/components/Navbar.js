import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="something" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleNavbar}>
          <MenuOpenIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
