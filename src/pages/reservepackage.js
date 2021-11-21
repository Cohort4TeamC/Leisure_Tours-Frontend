import './reservepackage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import { Container, Tabs, Tab, Row, Col,Form,Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
const PackageReversed = () => {


  return (
    <>
     
     <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="cancelledpayment-page">
        <div className="cancelledpayment-page-layer">

      <p className="cancelledpayment-title">Reserved Package</p>
    </div>
    </div>
    
    <Container className="payment-procedure-container">

        <Row className="payment-confirm-container" >
          
                     <Col lg={10}  className="confirmation-text cancelled-text">
                       <h4>You Have Reserved The Package</h4>
                       <p >
                        <h6 className="reservation-note"> Please note that the reservation would get cancelled after 15 days from now on..</h6><br />
                         Kindly contact us the given email or contact number if you have any concerns to be raised. </p>
                     <Col md={2}  className="confirmation-text canclled-btns">
                     <Button className="book-now feedback-btn confirm"> <Link to="/">Back to home </Link> </Button>
                <Button className="book-now feedback-btn cancel"> <Link to="/booktour">Select a new tour </Link> </Button>
              
                     </Col>
                     </Col>
        </Row>
      </Container>
      <FooterComp />
        </>
  );
}

export default PackageReversed;
