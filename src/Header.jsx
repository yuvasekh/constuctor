import React from "react";
import "./App.css";
import imglogo from "./Screenshot 45.png";
import { Button, Space } from "antd";
import { Outlet, Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header1">
      <div className="headnav1">
        <div className="contact-info">
          <h5 style={{ color: "white" }}>
            <FaPhone />
           9703924689
          </h5>
          <h5 style={{ color: "white" }}>
            <FaEnvelope />
           syuva893@gmail.com
          </h5>
        </div>
      </div>

      
    </header>
  );
};

export default Header;
