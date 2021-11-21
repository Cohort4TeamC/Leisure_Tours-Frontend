import './paymentproceed.css';
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
const PaymentProceed = (props) => {
   const [check,setCheck]=useState(false)
  return (
    <>

      <div className="nav-comp">
        <NavbarComp />

      </div>
      <div className="paymentproceed-confirm-page">
        <div className="paymentproceed-confirm-page-layer">

          <p className="paymentproceed-confirm-title">Payment Procedure</p>
        </div>
      </div>

      <Container className="payment-procedure-container">
      <h2 className="p-procedure-title">Payment Details</h2>

        <Row className="justify-content-md-center" >
         
          <Col lg={10} >
            <Row className="payment-main-container">
              <Col >
                <Row className="profile-container">
                  <Col className="active-profile">
                    <h5>Active Profile</h5>
                    <p>Name:</p>
                    <p>Contact Number:</p>
                    <p>Address</p>
                    <p>Email:</p>
                  </Col>
                  <Col className="payment-details">
                    <h5>Payment Details</h5>
                    <div className="card-payment-btn">
                      <Form.Select aria-label="Default select example">
                        <option>Select card</option>
                        <option value="1">Master card</option>
                        <option value="2">VISA Card</option>
                      </Form.Select>
                    </div>
                    <Row className="card-number">
                      <Col md={3}  > <Form.Control className="card-number" type="text" placeholder="Card Number" /></Col>
                      <Col md={3}  >
                <Button className="book-now feedback-btn" > Expiration Date</Button>
                         
                         </Col>
                      <Col md={3} > <Form.Control  className="three-digit" type="text" placeholder="CVC" /></Col>                      
                    </Row>
                    <br />
                    <Form.Check type="checkbox" value={check} onChange={(e)=>setCheck(!check)} className="payment-box-inner-text" label="I have read and understood all the terms and conditons and I agree to adhere company policies.  " />

                  </Col>
                </Row>
              </Col>
              <Col className="payment-btns-procedure" md={2}>
                <Button className="book-now feedback-btn confirm" disabled={check ? false :true}> <Link to="/confirmedpayment">Confirm and Pay </Link> </Button>
                <Button className="book-now feedback-btn cancel" > <Link to="/cancelledpayment">Cancel Payment </Link> </Button>
              </Col>
            </Row>
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


export default connect(mapStateToProps, mapDispatchToProps)(PaymentProceed);
