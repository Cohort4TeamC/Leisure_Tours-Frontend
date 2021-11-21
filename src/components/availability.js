import React from 'react';
import './availability.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import SearchModal from './searchModal'
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, Row,Col,Button } from 'react-bootstrap';
import { useState } from 'react';

const Availability =()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [days, setDays] = useState(0);
    const [country, setCountry] = useState("Country");
    const [searchData,setSearchData]=useState([])
    const [CurrentsearchData,setCurrentSearchData]=useState({})
    const [modalShow, setModalShow] = useState(false);

    const searchAvaliablityFunc=()=>{
        const data={
            Country:country,
            Days:days,
            date:startDate,
            day:startDate.getUTCDay(),
            month:startDate.getUTCMonth(),
            year:startDate.getUTCFullYear(),


        }
         setModalShow(true)
        searchData.push(data)
        setSearchData([...searchData])
        setCurrentSearchData(data)
    }

return(

    <Container className="availability-search">

        <Container className="inputs-availability">
        <Row className="justify-content-between">
            <Col sm={3}>
            <Form.Label className="label" >
      Tour Country
    </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
    <Form.Control type="text" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Tour Country" />
   

  </Form.Group>
            </Col>
    
            <Col sm={3}>
            <Form.Label  className="label" >
            No. of Nights
    </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="number" value={days} onChange={(e)=>setDays(e.target.value)} placeholder="Preffered No. of Days" />
   

  </Form.Group>
            </Col>
            <Col sm={3}>
            <Form.Label  className="label" >
            Travel Start Date
    </Form.Label>
        <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
</Col>
            <Col sm={2}>
                <Form.Label  className="label" >
        &nbsp;
    </Form.Label>
    <SearchModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={CurrentsearchData}
      />

    <div className="search-container">
      <Button variant="outline-secondary" className="availability-btn" onClick={()=>searchAvaliablityFunc()}>Search</Button>
         </div>  
</Col>

     </Row>
        </Container>
        </Container>
)
}

export default Availability;

