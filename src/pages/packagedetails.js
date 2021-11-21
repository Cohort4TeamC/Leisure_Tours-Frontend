import './packagedetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import { connect } from 'react-redux'
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const PackageDetail = (props) => {
  useEffect(() => {

   console.log(props.packageCurrent) 
  }, []);

  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="p-detail-page">
        <div className="p-detail-page-layer">

      <p className="p-detail-title">Package Detail</p>
    </div>
    </div>
    <div className="package-details">

    <Container className="p-details-main-container" >
      <Row className=" justify-content-around upper-detail-boxes ">
        <Col className="package-detail-box" lg={2} sm={5} >
         <h6> Duration</h6>
         <p>{props.packageCurrent.Duration}</p>
          </Col>
        <Col className="package-detail-box" lg={2} sm={5}  >
         <h6> Weekly Schedule</h6>
         <p>{props.packageCurrent.Schedule}</p>
          </Col>
        <Col className="package-detail-box" lg={2} sm={5}  >
         <h6> Activities</h6>
         <p>{props.packageCurrent.Activity}</p>
          </Col>
        <Col className="package-detail-box" lg={2} sm={5} >
         <h6> Package Price</h6>
         <p>{props.packageCurrent.Price } $/Person 
         <br /> 
         <Button className="book-now"> <Link to="/reservepackage"> Reserve </Link> </Button>
         <Button className="book-now"> <Link to="/confirmbooking"> Book Now </Link> </Button>
         </p>
          </Col>
      </Row>
      <Row className="justify-content-around ">
        <Col md={11} >
        <Row>
        <Col className="package-detail-box overview" md={12} >
         <h6> Overview</h6>
         <p>Tour {props.packageCurrent.Name} - {props.packageCurrent.Code}</p>
          </Col>    
        <Col className="package-detail-box feedback" md={12}  >
         <h6>Feeback</h6>
         <div className="feedback-container">
         <Form.Control className="feedback-input" type="text" placeholder="Type Here"  />
         
          <span> <Button className="book-now feedback-btn"> <Link to ="/">Send Feedback </Link> </Button> </span>
          </div>
          </Col>    
        </Row>
        </Col>
    <Col md={4}>
      </Col>
      </Row>
    </Container>
    </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(PackageDetail);
