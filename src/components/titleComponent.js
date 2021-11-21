import React from 'react';
import './title.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';

const TitleComponent =(props)=> {
    return (
        <div className="main-page">
            <div className="for-padding">

           <Container  className="container-layout" >
        <Row className="justify-content-center">
        <Col className="main-text" xs={12} sm={12} md={6}>
        <h4 className="welcome">Welcome To Leisure Tours</h4>
        <h1 className="main-title">Are You Looking For Amazing Places To Travel Around Sri Lanka ?</h1>
        <h6 className="lower-text">Leisure Tours Provide You Best<br /> Facilities At Very Economic Cost.</h6>
        
        </Col>
        
        </Row>
      </Container>
       
            </div>
        </div>
    );
}

export default TitleComponent;