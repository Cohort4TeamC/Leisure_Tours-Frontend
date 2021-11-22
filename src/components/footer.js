import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Col, Row, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp, } from 'react-icons/fa';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card1 from '../assets/images/card1.png'
import Card2 from '../assets/images/card2.png'
const NavbarComp = (props) => {

  return (
    <Row className="nav-footer">
      <Col md={3} sm={6}>
        <ul className="footer-links">
          <li><Link className="footer-bar-link" to="/">Home</Link></li>
          <li><Link className="footer-bar-link" to="/about">About</Link></li>
          <li><Link className="footer-bar-link" to="/signin">Login</Link></li>
          <li><Link className="footer-bar-link" to="/signup">Sign Up</Link></li>
          <li><Link className="footer-bar-link" to="/policies">Company Policies</Link></li>
          <li><Link className="footer-bar-link" to="/contactus">Contact Us</Link></li>
        </ul>
      </Col>
      <Col md={3} sm={6}>

        <ul className="footer-links">
          <li><Link className="footer-bar-link" to="faq">FAQ</Link></li>
          <li><Link className="footer-bar-link" to="policies">Policies</Link></li>
          <li><Link className="footer-bar-link" to="activities" > Activities</Link></li>
          <li><Link className="footer-bar-link" to="booktour">Packages</Link></li>
        </ul>
      </Col>
      <Col md={3} sm={6}>
        <ul className="footer-links">
          <li className="header-link">Company Registration Number</li>
          <li><Link className="footer-bar-link">0011946</Link></li>
          <li className="header-link">Social Media Contact</li>
          <li>
            <ul className="social-links">
              <li >
                <Link className="footer-bar-link" className="fb">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link className="footer-bar-link" className="twitter">
                  <FaTwitter />
                </Link>
              </li>
              <li >
                <Link className="footer-bar-link" className="whatsapp">
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </Col>
      <Col md={3} sm={6}>

        <ul className="footer-links ">
          <li className="header-link">Available Card Payment Options</li>
          <li className="cards"><Link className="card-1 " ><img src={Card1} /></Link></li>
          <li className="cards"><Link  className="card-2" ><img src={Card2} /></Link></li>
        </ul>
      </Col>
      <Col md={12} className="rights" >
        <div  >
          Copyright © 2021 Leisure Tours Agency
        </div>
      </Col>
    </Row>

  );
}

export default NavbarComp;