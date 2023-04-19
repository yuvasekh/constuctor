import React from 'react'
import './App.css'
import imglogo from "./Screenshot 45.png";
import { Button, Space } from "antd";
import { Outlet, Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
const Homeheader = () => {
  return (
<div className="headnav">
        <img
          src={imglogo}
          width={"120px"}
          height={"55px"}
          className="logoimg"
        />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              {" "}
              <Link to="/about">Services</Link>
            </li>
            <li className="nav__item">
              {" "}
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}
export default Homeheader;
