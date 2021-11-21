import './booktour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tabs, Tab, Row, Col,Form,Button } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import PackageCard from '../components/card';
import DatePicker from "react-datepicker";
import ConfirmModal from '../components/confirmationModal'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const BookTour = () => {
    const [modalShow, setModalShow] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const [check,setCheck]=useState(false)
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="booktour-page">
        <div className="booktour-page-layer">

      <p className="booktour-title">Book a Tour</p>
    </div>
    </div>


    <Tabs
  defaultActiveKey="packages"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 procedure-tabs  "
>
  <Tab eventKey="packages" title="Tour Packages">
  <Container>
      <Row>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 1" code="Family Package" price="150000" duration="8 Nights" schedule="Sunday"activity="Hiking"  image={'https://c0.wallpaperflare.com/preview/902/241/146/egypt-tour-packages-egypt-packages-egypt-vacation-packages-egypt-holidays.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 2" code="Romantic Gataway" price="100000" duration="4 Nights" schedule="Friday" activity="Mountain Climb"  image={'https://eskipaper.com/images/australia-4.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 3" code="Adventure Tour" price="500000" duration="2 Nights" schedule="Monday" activity="Fishing"  image={'https://www.teahub.io/photos/full/277-2776548_beach-photo-tourist-place-in-india-hd.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 4" code="Niyama Islands" price="120000" duration="5 Nights" schedule="Friday" activity="Hiking"  image={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 5" code="Private Resorts" price="150000" duration="5 Nights" schedule="Saturday" activity="Para Gliding"  image={'https://premiotravels.com/wp-content/uploads/2021/07/5-Days-EID-UL-ADHA-in-Canada-Holiday-Travel-Tour-Package-scaled.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 6" code="Romantic Gataway" price="100000" duration="8 Nights" schedule="Friday" activity="Hiking"  image={'https://img.traveltriangle.com/attachments/pictures/1104679/original/Myanmar_temples_in_the_Bagan_Archaeological_Zone__Myanmar..jpg?tr=w-583,h-406'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 7" code="Family Package" price="500000" duration="6 Nights" schedule="Thursday" activity="Swim"  image={'https://5.imimg.com/data5/UR/PW/HY/SELLER-44050990/ayodhya-tour-packages-500x500.jpg'} />
        
        </Col>
        <Col lg={3} md={4} sm={6}>
      <PackageCard  name="Package 8" code="Adventure Tour" price="120000" duration="3 Nights" schedule="Monday" activity="Ski Diving"  image={'https://www.teahub.io/photos/full/35-355802_beautiful-city-in-turkey.jpg'} />
        
        </Col>
              </Row>
    </Container>
  </Tab>
  <Tab eventKey="customize"  title="Customize Tour Packages">
    <Container className="customize-container" >
      <h6>Customize a Package as you wish</h6>
      <Row className="customize-tour-container">
    <Col md={3} xs={4} className="customize-title">
      <p>Country</p>
      <p>Country Area</p>
      <p>Hotels(s)</p>
      <p>Activities(ies)</p>
      <p>No of People</p>
      <p>Date</p>
      <p>Number of Nights</p>
    </Col>
    <Col md={4} xs={8} className="customize-value">
<div>
    <Form.Select className="mb-2 mt-2" aria-label="Default select example">
  <option>Select Country</option>
  <option value="country1">SriLanka</option>
  <option value="country2">Canada</option>
  <option value="country3">China</option>
</Form.Select>

</div>
<div >
    <Form.Select className="mb-2 mt-2" aria-label="Default select example">
  <option>Select Location</option>
  <option value="Location1">Jaffna</option>
  <option value="Location2">Colombo</option>
  <option value="Location3">Vavuniya</option>
</Form.Select>

</div>
<div className="two-options">
    <Form.Select className="mb-2 mt-2" aria-label="Default select example">
  <option>Select Hotel 1</option>
  <option value="Hotel1">Valampuri</option>
  <option value="Hotel2">Fox</option>
</Form.Select>
    <Form.Select className="mb-2 mt-2" aria-label="Default select example">
    <option>Select Hotel 2</option>
  <option value="Hotel1">Jetwing</option>
  <option value="Hotel2">Cinnamon</option>
</Form.Select>


</div>
<div className="two-options">
    <Form.Select className="mb-2 mt-2" aria-label="Default select example">
  <option>No of People</option>
  <option value="1">1</option>
  <option value="3">3</option>
  <option value="5">5</option>
</Form.Select>


</div>
<div className="two-options">
  <DatePicker className="mb-2 mt-2 date" className="date-picker"   selected={startDate} onChange={(date) => setStartDate(date)} />

  <DatePicker className="mb-2 mt-2 date" className="date-picker"   selected={endDate} onChange={(date) => setEndDate(date)} />


</div>
<div className="two-options">
<Form.Select className="mb-2 mt-2" aria-label="Default select example">
  <option>No of Nights</option>
  <option value="4">4</option>
  <option value="8">8</option>
  <option value="10">10</option>
</Form.Select>

</div>


    </Col>
    <Col md={4}></Col>
    <Row>
      <Col md={8}>

    <Form.Check type="checkbox" value={check} onChange={(e)=>setCheck(!check)} className="payment-box-inner-text" label="I have read and understood all the terms and conditons and I agree to adhere company policies.  " />
              </Col>
              <ConfirmModal
  show={modalShow}
  onHide={() => setModalShow(false)}
/>


              <Col md={4}>
              <Button className="book-now feedback-btn " type="submit" disabled={check==true ? false: true} onClick={()=>setModalShow(true)}>Send For Confirmation</Button>

              </Col>
</Row>
  </Row> 
    
    </Container>
 
  </Tab>
 
</Tabs>

    

<FooterComp />
</>
  );
}

export default BookTour;
