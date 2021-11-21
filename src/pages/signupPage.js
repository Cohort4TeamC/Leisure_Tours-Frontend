import './signupPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import SignUp from '../components/signup'
import { useState } from 'react';
const SignUpPage = () => {


  return (
    <>
    <div>
    <div className="nav-comp">
          <NavbarComp />

        </div>

      <SignUp />
      <FooterComp />
    </div>
</>
  );
}

export default SignUpPage;
