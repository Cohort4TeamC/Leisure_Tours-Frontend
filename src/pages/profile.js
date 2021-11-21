import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/navbar';
import { Container, Dropdown,DropdownButton, Button, Row, Col, } from 'react-bootstrap';
import ProfileImage from '../assets/images/member3.jpg'
import FooterComp from '../components/footer';
import UpdateProfile from '../components/updateprofile';
import {BsFillPersonFill} from 'react-icons/bs'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Profile = () => {
  const [modalShow, setModalShow] = useState(false);
  
  const [fname, setFname] = useState("Johns");
  const [lname, setLname] = useState("Andrew");
  const [email, setEmail] = useState("john.a@gmail.com");
  const [passport, setPassport] = useState("901181181");
  const [nationality, setNationality] = useState("Yes");
  const [country, setCountry] = useState("Sri Lanka");


  return (

<>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <Container className="profile-container">
   <div className="icon-logout">
        <DropdownButton className="drop-btn"
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title={<BsFillPersonFill />}
      >
        <Dropdown.Item eventKey="1">John Andrew</Dropdown.Item>
        <Button className="profile-btn user-profile"><Link to="profile" > User Profile</Link> </Button><br />
        <Button className="profile-btn user-profile"><Link to="signin" > Sign Out</Link> </Button>
        
      </DropdownButton>
  </div>
    <h3 className="profile-header">User Profile</h3>
    <h6>Account Information</h6>
      <Row className="inner-profile-container">
        <Col md={4} xs={6}>
          <p className="input-titles" >First Name</p>
          <p className="input-titles" >Last Name</p>
          <p className="input-titles">E-mail</p>
          <p className="input-titles">Passport / NIC</p>
          <p className="input-titles">Sri Lankan?</p>
          <p className="input-titles">Country</p>
          <p className="input-titles">Customized package Approval</p>
        </Col>
        <Col md={4} xs={6}>
        <p className="input-values">{fname}</p>
          <p className="input-values">{lname}</p>
          <p className="input-values">{email}</p>
          <p className="input-values">{passport}</p>
          <p className="input-values">{nationality}</p>
          <p className="input-values">{country}</p>
          <Button className="profile-btn">None</Button>
        </Col>
        
        <Col md={4}  className="profile-image-container">
       
          <img className="profile-image" src={ProfileImage} />
          <h5>Johns Andrew</h5>
          <UpdateProfile 
                         fname={fname}
                         setfname={setFname}
                         lname={lname}
                         setlname={setLname}
                         
                         email={email}
                         setemail={setEmail}
                         
                         passport={passport}
                         setpassport={setPassport}
                         
                         nationality={nationality}
                         setnationality={setNationality}
                         
                         country={country}
                         setcountry={setCountry}
                        
                         show={modalShow}
                        
                         onHide={() => setModalShow(false)}
                                            />

        </Col>
      </Row>
   </Container>
      <FooterComp />
</>
  );
}

export default Profile;
