import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
const NavbarComp = (props) => {

  return (
    <div>
      <Container fluid className="nav">
        <Container fluid className="nav-bar"  >
          <Navbar expand="xl" collapseOnSelect={true} variant="dark" >
            <Navbar.Brand  className="logo">Leisure Tours</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"  >

                <Nav.Link className="menu-dropdown"  ><Link to="" className="nav-bar-links">Home </Link> </Nav.Link>
                <Nav.Link className="menu-dropdown"><Link to="about" className="nav-bar-links">About </Link></Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle className="nav-bar-link dropdown-btn" id="dropdown-basic">
                    Tour
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-value">
                    <Dropdown.Item  ><Link to="tourprocedure" className="nav-bar-links-toggle">Tour Procedure </Link></Dropdown.Item>
                    <Dropdown.Item><Link to="booktour" className="nav-bar-links-toggle">Book a Tour</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link className="menu-dropdown" ><Link to="policies" className="nav-bar-links">Policies</Link></Nav.Link>
                <Nav.Link className="menu-dropdown"><Link to="contactus" className="nav-bar-links">Contact Us</Link></Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle className="nav-bar-link dropdown-btn" id="dropdown-basic">
                    Sign In
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-value">
                    <Dropdown.Item><Link to="signin" className="nav-bar-links-toggle">Sign In</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="signup" className="nav-bar-links-toggle">Sign Up</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link className="menu-dropdown"><Link className="nav-bar-links" to="useraccount">User Acount Control</Link></Nav.Link>
              </Nav>
              <Nav >
                <Nav.Link href="#contact-number" className=" contact-nbr">077-123-4567</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
}

export default NavbarComp;