import './tourCards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Nav, Row, Col, } from 'react-bootstrap';

import { useState } from 'react';

const TourCards = (props) => {
  return (
    <>
<Card className="card-tour-container">
  <Card.Body className="tour-card-body">
    <Card.Title className="tour-menu-title">{props.title}</Card.Title>
    <Card.Text className="inner-text-tour">
     {props.description}
    </Card.Text>
  </Card.Body>
</Card>
</>
  );
}

export default TourCards;
