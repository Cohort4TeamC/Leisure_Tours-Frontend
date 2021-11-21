import './loginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import Login from '../components/login';
import FooterComp from '../components/footer';
import { useState } from 'react';
const Layout = () => {


  return (
    <>
    <div>
    <div className="nav-comp">
          <NavbarComp />

        </div>

      <Login />
      <FooterComp />
    </div>
</>
  );
}

export default Layout;
