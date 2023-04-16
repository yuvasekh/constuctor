import React from 'react';
import imglogo from './Screenshot 45.png'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook,faTwitter,faLinkedin  } from '@fortawesome/free-brands-svg-icons';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
  <div className="logos"> 
  <img src={imglogo} alt="Company Logo"/>
  <div>
  <p>Constructor and Builder</p>
  </div>

  </div>


      <div className="contact-infos">
  
  <div >
    <p>Contact Us:</p>
  </div>
     
  
        <FaPhone />
        <p className="contact-text">123-456-7890</p>
        <FaEnvelope />
        <p className="contact-text">info@company.com</p>
      </div>
    
      <div className="social-icons">
    <FaFacebook size={32} />
 
      <FaTwitter size={32} />
      <FaLinkedin size={32} />
      
      </div>
    </div>  
  );
}

export default Footer;
