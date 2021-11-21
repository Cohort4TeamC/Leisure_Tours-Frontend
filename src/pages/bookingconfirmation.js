import './bookingconfirmation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import PackageCard from '../components/card';
import { useState } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const ConfirmBooking = (props) => {
  const [check1,setCheck1]=useState(false)
  const [check2,setCheck2]=useState(false)
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="booktour-confirm-page">
        <div className="booktour-confirm-page-layer">

      <p className="booktour-confirm-title">Confirm Booking</p>
    </div>
    </div>
    <Container>
      <h2 className="booking-details">Booking Details</h2>
      <Row className="main-row" >
        <Col md={3} sm={6}>
          <Row className="inside-row">
            <Col className="inner-col">Package Name <br /> <p>Product 1</p> </Col>
            <Col className="inner-col">Package Code <br /> <p>Code 1</p></Col>
            <Col className="inner-col">Weekly Schedule <br /> <p>Friday</p></Col>
          </Row>
        </Col>
        <Col md={3} sm={6}>
          <Row className="inside-row">
          <Col className="inner-col">Date</Col>
            <Col className="inner-col" >Travel Start <br /> <p>12/12/2020</p></Col>
            <Col className="inner-col">Travel End <br /> <p>16/12/2020</p></Col>
          </Row>
        </Col>
        <Col md={3} sm={6}>
        <Row className="inside-row">
            <Col className="inner-col">Hotel And Activity</Col>
            <Col className="inner-col">Allocated Hotel <br /> <p>Belgium Hotel</p> </Col>
            <Col className="inner-col">Allocated Activities <br /> <p>Hiking </p></Col>
          </Row>
        </Col>
        <Col md={3} sm={6}>
        <Row className="inside-row">
          <Col className="inner-col">Total Price</Col>
            <Col className="inner-col"> <p>10000 $ x 5 </p></Col>
            <Col className="inner-col"><p>50000 $ </p></Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="check-box-confirmation">
        <Col md={5} sm={12}>
      <h6>Kindly Select One As Appropriate</h6>
      <Form.Check type="checkbox" className="check-box-inner-text" value={check1} onChange={(e)=>setCheck1(!check1)} label="I am solely responsible for having Necessary VISA before travel. " />
      <Form.Check type="checkbox" className="check-box-inner-text" value={check2} onChange={(e)=>setCheck2(!check2)} label="I am travelling within boundries of SriLanka. " />
        </Col>
        <Col md={4} sm={12} className="confirm-proceed">
        <Button className="book-now feedback-btn " disabled={check1==true  ? false  : check2==true ? false : true }> <Link to ="/paymentproceed"  >Confirm And Proceed </Link> </Button>
        </Col>
      </Row>
    </Container>
    
      <FooterComp />
</>
  );
}

const mapStateToProps = (state) => {
  return {
      packageCurrent: state.currentPackage
  }
}


const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBooking);
