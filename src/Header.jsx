import React from 'react';
import './App.css'
import imglogo from './Screenshot 45.png'
import { Button, Space } from 'antd';
import { Outlet, Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="header1">
      <div className='headnav1'>
    <div className="contact-info">
      <h5 style={{color:'white'}}><FaPhone />Phno:9703924689</h5>
      <h5 style={{color:'white'}}><FaEnvelope />Email:syuva893@gmail.com</h5>
    </div>
  </div>
  
      <div className='headnav'>
      
      <img src={imglogo} width={'120px'} height={'55px'} className='logoimg'/>
    <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"> <Link to="/">Home</Link></li>
          <li className="nav__item"> <Link to="/about">Services</Link></li>
          <li className="nav__item"> <Link to="/contact">Contacts</Link></li>
        </ul> 
    
      </nav>
    
 
      </div>

    </header>
  );
};

export default Header;
