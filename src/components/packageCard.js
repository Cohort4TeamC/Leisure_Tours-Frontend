import React from 'react';
import './packageCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const PackageCard = (props) => {
  return (
    <Container >
      <p className="gallery-titles">Best Selling Packages</p>
      <Row className="justify-content-around">
        <Col lg={2} sm={6} >
          <Container className="card-package">

            <Card className="card-container">
              <Card.Header className="package-name">Family Trip</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="price-package">LKR : 50000</ListGroup.Item>
                <ListGroup.Item>  5 Nights </ListGroup.Item>
                <ListGroup.Item>  Sunday </ListGroup.Item>
                <ListGroup.Item>  SriLanka  </ListGroup.Item>
                <ListGroup.Item className="pkg-include">2101 </ListGroup.Item>

              </ListGroup>
            </Card>
          </Container>
        </Col>
        <Col lg={2} sm={6} >
          <Container className="card-package">

            <Card className="card-container">
              <Card.Header className="package-name">Romantic Gataway </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="price-package">LKR : 150000</ListGroup.Item>
                <ListGroup.Item>  3 Nights </ListGroup.Item>
                <ListGroup.Item>  Monday </ListGroup.Item>
                <ListGroup.Item>  SriLanka  </ListGroup.Item>
                <ListGroup.Item className="pkg-include">2102 </ListGroup.Item>

              </ListGroup>
            </Card>
          </Container>
        </Col> <Col lg={2} sm={6} >
          <Container className="card-package">

            <Card className="card-container">
              <Card.Header className="package-name">Adventure Tour</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="price-package">LKR : 100000</ListGroup.Item>
                <ListGroup.Item>  4 Nights </ListGroup.Item>
                <ListGroup.Item>  Tuesday </ListGroup.Item>
                <ListGroup.Item>  Sri Lanka   </ListGroup.Item>
                <ListGroup.Item className="pkg-include">2103 </ListGroup.Item>

              </ListGroup>
            </Card>
          </Container>
        </Col> <Col lg={2} sm={6} >
          <Container className="card-package">

            <Card className="card-container">
              <Card.Header className="package-name">Niyama Islands</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="price-package">LKR : 120000</ListGroup.Item>
                <ListGroup.Item>  4 Nights </ListGroup.Item>
                <ListGroup.Item>  Sunday </ListGroup.Item>
                <ListGroup.Item> Canada </ListGroup.Item>
                <ListGroup.Item className="pkg-include">2104 </ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
        </Col>
        <Col lg={2} sm={6} >
          <Container className="card-package">

            <Card className="card-container">
              <Card.Header className="package-name">Private Resorts</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="price-package">LKR : 220000</ListGroup.Item>
                <ListGroup.Item>  4 Nights </ListGroup.Item>
                <ListGroup.Item>  Monday </ListGroup.Item>
                <ListGroup.Item>  SriLanka </ListGroup.Item>
                <ListGroup.Item className="pkg-include">2105 </ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
        </Col>

      </Row>
    </Container>
  );
}

export default PackageCard;