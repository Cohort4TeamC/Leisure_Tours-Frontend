import './faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import AboutData from '../components/aboutdata';
import { useState } from 'react';
const Faq = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="faq-page">
        <div className="faq-page-layer">

      <p className="faq-title">F A Q</p>
    </div>

    </div>
    <Container className="faq-container mt-4 mb-4 ">
      <h3 className="">FAQ</h3>
      <h6>Frequently Asked Questions</h6>
      <br />
      <Row className="justify-content-between">
        <Col md={6} className="left-col">
          <h5>jeny@gmail.com</h5>
          <p className="faq-text">Inquiry: WHY SHOULD I USE A TRAVEL AGENT TO BOOK A VACATION?<br />
          A travel agent takes all of the headache out of planning a trip and handles virtually all aspects of your travel, at absolutely no cost to you. The combined experience of the team and the feedback from our thousands of travelers provides an invaluable resource to the traveler planning an important trip.
          In recent years, the top travel vendors have empowered and trained the agency community to be even more effective and efficient go-betweens. Read more about working with a travel agent.
          </p>          
          <h5>sam@yahoo.com</h5>
          <p className="faq-text">Inquiry: CAN YOU WORK WITHIN A CERTAIN BUDGET?<br />
          Yes, we work within any and all realistic budgets, and an honest sharing of ideas and goals helps us immensely when making recommendations and suggested edits to travel plans.

          </p>
          <h5>sharan@hotmail.com</h5>
          <p className="faq-text">Inquiry: DOES IT COST MONEY TO GET A QUOTE?<br />
          No, there is no fee for our vacation planning services as the travel vendors involved recognize our value and compensate us from the gross amount paid (what you would have paid even without our assistance). For those complicated international itineraries that require custom crafting and significant involvement of our international on-location partners, we do request an intent-to-travel deposit to begin the process. This deposit is applied to the reservations that are made on your behalf.
          </p>
        </Col>
        <Col md={6} className="right-col">
        <h5>ananth@gmail.com</h5>
          <p className="faq-text">Inquiry: WHERE CAN I FIND MY ITINERARY ONCE MY TRIP IS BOOKED?<br />
          Your itinerary as booked by Professional Travel a Direct Travel Company is available on our View Trip website with your specific reservation code as the login. Since we are directly connected to vendors’ inventory systems (airlines, cruise lines, hotels, cars, rail, etc.), you will also be able to retrieve your information on their unique client sites, many of which offer a wealth of information to help you prepare for the trip ahead.        
            
          </p>

        </Col>
      </Row>
    </Container>
      <FooterComp />
</>
  );
}

export default Faq;
