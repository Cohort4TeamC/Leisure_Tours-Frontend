import './tourprocedure.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, Row, Col,Container } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const TourProcedure = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
        <div className="procedure-page">
        <div className="procedure-page-layer">

      <p className="procedure-title">Tour Procedure</p>
    </div>
    </div>

    <Tabs
  defaultActiveKey="legal"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 procedure-tabs  "
>
  <Tab eventKey="legal" title="Legal Requirements">
    <Container>
  <Row className="justify-content-between legal-container">
          <Col md={12}>
            
          <h2 className="inner-main-procedure-title" >Overseas tourists</h2>
          <p className="procedure-text">
          All visitors to Sri Lanka are to apply for a visa online through eta.gov.lk prior to departure. Fully vaccinated travellers are not subject to on-arrival PCR tests or quarantine. Non-vaccinated travellers are limited to a stay not exceeding 13 nights, or 14 days.
          </p>
</Col>      
            <Col md={12}>
            <h2 className="inner-main-procedure-title">Local tourists</h2>
          <p className="procedure-text">
          You're subject to all local laws and penalties, including those that may appear harsh by Australian standards. Research local laws before travelling.

In Sri Lanka it's illegal to:

cover your face in a way that prevents your identification
smoke in most public places
drink alcohol in most public places
engage in same-sex sexual acts
You must not take photos or record video in High-Security Zones (HSZ),

 including:
military establishments
some government buildings
official residences
Some HSZs may not be signposted.

It's illegal to mistreat Buddhist images, including:
having your back to Buddha
posing for a photograph next to a statue of Buddha
wearing tattoos, jewellery or clothing associated with Buddhism
You must have legal authorisation to export certain items, such as antiquities. Contact the Sri Lankan Department of Archaeology for details.          </p>
            </Col>
          </Row>
          </Container>
  </Tab>
  <Tab eventKey="visa" title="VISA Procedure">
    <Container className="visa-container">
    <Row className="justify-content-between ">
          <Col md={12}>
            
          <h2 className="inner-main-procedure-title" >Travelling To Srilanka</h2>
          <p className="procedure-text">
          Entry and exit conditions can change. Details on Sri Lankan entry requirements can be found on Sri Lanka Travel.

You need a visa, in the form of an Electronic Travel Authority (ETA).

Tourists are unable to obtain visas on arrival. Select the correct visa category for your situation. Depending on your ETA category, you may be charged a processing fee. You will need to apply online and obtain a valid visa prior to arrival in Sri Lanka. If you engage in activities that breach your visa conditions, authorities could detain or deport you.

          </p>
</Col>      
            <Col md={12}>
            <h2 className="inner-main-procedure-title">Travelling From Srilanka</h2>
          <p className="procedure-text">
          There should be at least six months' validity on your passport on the expected date of departure from Sri Lanka.         </p>
            </Col>
          </Row>
    </Container>
  </Tab>
 
</Tabs>

      <FooterComp />
</>
  );
}

export default TourProcedure;
