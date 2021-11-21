import './aboutpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import AboutData from '../components/aboutdata';
import { useState } from 'react';
const AboutPage = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="about-page">
        <div className="about-page-layer">

      <p className="about-title">About Us</p>
    </div>
    </div>
      <AboutData />
      <FooterComp />
</>
  );
}

export default AboutPage;
