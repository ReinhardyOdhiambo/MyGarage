import React from "react";
import "./TopContent.css";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react"; 
import topImage from "../assets/images/top.jpg";
import Header from './Header.js'
import { Link } from "react-router-dom";

const TopContent = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="topInformation">
      <Header/>
      <div className="infoText">
        <h1 className="title1">Welcome To Karcrazy</h1>
        <p className="caption">
          “If you always do what you’ve always done, you’ll always get what
          you’ve always got.”
        </p>
        <p className="description"></p>
      </div>
      <Link to={'/services'}>
      <div className="topbutton">
        <h4>Services</h4>
        < ArrowForwardIcon className="arrow"/>
      </div>
      </Link>
    </div>
  );
};

export default TopContent;
