import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import Place1 from '../assets/images/p1.jpg'
import Place2 from '../assets/images/p2.jpg'
import Place3 from '../assets/images/p3.jpg'
import Place4 from '../assets/images/p4.jpg'
import Place5 from '../assets/images/p5.jpg'
import Place6 from '../assets/images/p6.jpg'
import Place7 from '../assets/images/p7.jpg'
import Place8 from '../assets/images/p8.jpg'
import Place9 from '../assets/images/p9.jpg'
import Place10 from '../assets/images/p10.jpg'
import Place11 from '../assets/images/p11.jpg'
import Place12 from '../assets/images/p12.jpg'
import Place13 from '../assets/images/p13.jpg'
import Place14 from '../assets/images/p14.jpg'
import Place15 from '../assets/images/p15.jpg'
import Place16 from '../assets/images/p16.jpg'

import { useState } from 'react';
const Layout = () => {


  return (
    <>
    <div className="gallery">
      <Container>
        <p className="gallery-titles">Tour Places</p>
        <Row>
          <Col className="place-img" sm={6} lg={3}>
            <p> Nine Arches Bridge, Ella, Sri Lanka </p>
        <img src={Place1} />
          </Col>
          <Col className="place-img" sm={6} lg={3}>
          <p> Sigiriya, Sri Lanka </p>

          <img src={Place2} />

          </Col>
          <Col className="place-img" sm={6} lg={3}>
          <p> Panama Rd, Arugam Bay, Sri Lanka </p>

        <img src={Place3} />
            
          </Col>
          <Col className="place-img" sm={6} lg={3}> 
          <p> Midigama Beach, Sri Lanka </p>

        <img src={Place4} />
          
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="gallery-titles" id="activities">Activities</p>
        <Row>
          <Col className="place-img" sm={6} lg={3}>
            <p> Hiking </p>
        <img src={Place5} />
          </Col>
          <Col className="place-img" sm={6} lg={3}>
          <p> Boating </p>

          <img src={Place6} />

          </Col>
          <Col className="place-img" sm={6} lg={3}>
          <p> Paragliding </p>

        <img src={Place7} />
            
          </Col>
          <Col className="place-img" sm={6} lg={3}> 
          <p> Mountain Climbing </p>

        <img src={Place8} />
          
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="gallery-titles">Hotels</p>
        <Row>
          <Col className="place-img" sm={6} lg={3}>
            <p> Jetwing Jaffna </p>
        <img src={Place9} />
          </Col>
          <Col className="place-img" sm={6} lg={3}>
          <p> Cinnamon Grand </p>

          <img src={Place10} />

          </Col>
          <Col className="place-img" sm={6} lg={3}>
          <p> Valampuri </p>

        <img src={Place11} />
            
          </Col>
          <Col className="place-img" sm={6} lg={3}> 
          <p> Fox resort </p>

        <img src={Place12} />
          
          </Col>
        </Row>
      </Container>
    </div>
</> 
  );
}

export default Layout;
