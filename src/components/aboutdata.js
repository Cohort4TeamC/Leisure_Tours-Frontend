import React from 'react';
import './aboutdata.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import member1 from '../assets/images/member1.jpg'
import member2 from '../assets/images/member2.jpg'
import member3 from '../assets/images/member3.jpg'
import member4 from '../assets/images/member4.jpg'

import partner1 from '../assets/images/partner1.jpg'
import partner2 from '../assets/images/partner2.jpg'
import partner3 from '../assets/images/partner3.jpg'
import partner4 from '../assets/images/partner4.jpg'

const AboutData = (props) => {
    return (
        <Container className="about-data-container">
            <Row className="story-container">
                <Col md={6}>
                    <p className="story-title">Out Story</p>
                </Col>
                <Col md={5}>
                    <p className="story-text">
                    Leisure Tours is a tourism company with a long experience in tourism. The company was founded with the intention of bringing people from all over the world to Sri Lanka.We are specialized in travel design and can organize a variety of trips. Our tours are designed to give you a travel experience that is inspiring, unique and deeply rewarding and to offer you fun, excitement, comfort and great memories.
                    </p>
                </Col>
            </Row>
            <Row className="mission-container">
                <Col md={5}>
                    <p className="mission-text">
                    Our vision is to be innovators, leaders and creative in the concepts of travel, positioning our company in the market within the best tourism companies in Srilanka, being recognized for our professionalism and high quality products.
                   < br/> Our mission is serving our customers, searching their entire satisfaction and providing touristic services of quality, committing to the social, cultural and environmental reality of our country.
</p>
                </Col>
                <Col md={6}>
                    <p className="mission-title">Mission and Vision</p>
                </Col>
            </Row>
            <Row className="story-container">
                <Col md={12}>
                    <p className="mission-title">Our Partners</p>
                </Col>
                <Col md={12}>
                    <Row >
                        <Col  lg={3}  sm={6}>

                    <img src={partner1} className="partner-img" />
                    <p className="partner-title">Browns</p>
                        </Col>
                      
                        <Col  lg={3} sm={6}>

                    <img src={partner2} className="partner-img" />
                    <p className="partner-title">Dialog</p>
                        </Col>
                      
                        <Col  lg={3}  sm={6}>

                    <img src={partner3} className="partner-img" />
                    <p className="partner-title">Cargills</p>
                        </Col>
                      
                        <Col  lg={3} sm={6}>

                    <img src={partner4} className="partner-img" />
                    <p className="partner-title">Nestle</p>
                        </Col>
                      
                    </Row>

                </Col>

            </Row>
            <Row >
                <Col md={12}>
                    <p className="member-title-header">Company Team Members</p>
                </Col>
                <Col >
                <Row className="member-container">
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member1} />
                    <p className="member-title">Hanshika< br/>CEO</p>

                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member2} />
                    <p className="member-title">Ashwin< br/>Finance Manager</p>

                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member3} />
                    <p className="member-title">Tamana< br/>IT Manager</p>

                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="member-img-container">    
                        <img className="member-image" src={member4} />
                    <p className="member-title">Khan< br/>HR Manager</p>

                        </div>
                    </Col>
                </Row>
                </Col>
               
            </Row>

        </Container>
    );
}

export default AboutData;