import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
        <div className="logoContainer">
          <img src="" alt="" />
<Link className="logoname" to={'/'}><h3><span className="spancolorr">My</span>Garage</h3></Link>
        </div>
        <div className="linkContainer">
          <Link className="navlink" to={'/'} >Home</Link>
          <Link className="navlink" to={'/services'} >Services</Link>
          <Link className="navlink" to={'/about'} >About Us</Link>
          <Link className="navlink" to={'/contact'} >Contact</Link>
         
        </div>
        <div onClick={() => setShow(!show)} className="menuIcon">
          <MenuIcon className="menuIcon" />
        </div>
        {show ? (
          <div className="r-nav">
            <div className="r-items">
              <p>home</p>
              <Divider />
              <p>Contact</p>
              <Divider />
              <p>About Us</p>
              <Divider />
            </div>
          </div>
        ) : null}
      </div>
  );
};

export default Header;
