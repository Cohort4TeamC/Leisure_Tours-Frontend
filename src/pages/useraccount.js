import './useraccount.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form,Tabs,Tab, Button, Row, Col,Dropdown,DropdownButton } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import ProfileImage from '../assets/images/member3.jpg'
import FooterComp from '../components/footer';
import UpdateProfileModal from '../components/useraccount-model';
import DatePicker from "react-datepicker";
import {BsFillPersonFill} from 'react-icons/bs'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const UserAccount = () => {
  const [modalShow, setModalShow] = useState(false);
const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  // Admin
  
  const [idadmin, setIdadmin] = useState("00218");
  const [stafffnameadmin, setStaffFnameadmin] = useState("Aanya");
  const [stafflnameadmin, setStaffLnameadmin] = useState("Peace");
  const [staffemailadmin, setStaffEmailadmin] = useState("aanya.p@gmail.com");
  const [passwordAdmin, setStaffPasswordAdmin] = useState("apeace123");
  const [staffnumberadmin, setStaffNumberadmin] = useState("071 123 5682");
  const [staffaddressadmin, setStaffAddressadmin] = useState("Colombo 06, Sri Lanka");


// Staff

  const [id, setId] = useState("00412");
  const [stafffname, setStaffFname] = useState("Carl");
  const [stafflname, setStaffLname] = useState("Pang");
  const [staffemail, setStaffEmail] = useState("carl.pang@gmail.com");
  const [staffnumber, setStaffNumber] = useState("071 416 8989");
  const [staffaddress, setStaffAddress] = useState("Colombo 11, Sri Lanka");

// Customer

  const [fname, setFname] = useState("Johns");
  const [lname, setLname] = useState("Andrew");
  const [email, setEmail] = useState("john.a@gmail.com");
  const [number, setNumber] = useState("078 111 8989");
  const [address, setAddress] = useState("Colombo 11, Sri Lanka");
  const [passport, setPassport] = useState("901181181");
  const [srilanka, setSrilanka] = useState("Yes");
  const [nationality, setNationality] = useState("Sri Lankan");
  const [country, setCountry] = useState("Sri Lanka");

// Package

const [pcode,setPcode]=useState("CTP06")
const [pname,setPname]=useState("Hiltop Adeventure")
const [pcountry,setPcountry]=useState("Sri Lanka")
const [pcountryArea1,setPcountryArea1]=useState("Nuwara Eliya ")
const [pcountryArea2,setPcountryArea2]=useState("Badulla")
const [photel1,setPhotel1]=useState("City Hotel")
const [photel2,setPhotel2]=useState("None")
const [pactivity1,setPactivity1]=useState("Hiking")
const [pactivity2,setPactivity2]=useState("None")
const [pprice,setPprice]=useState("XX $")

  const UpdateStaff=()=>{
    setId(id)
    setStaffFname(stafffname)
    setStaffLname(stafflname)
    setStaffEmail(staffemail)
    setStaffNumber(staffnumber)
    setStaffAddress(staffaddress)
    alert("Account Updated")
  }

  const packageUpdated=()=>{
    setPcode(pcode)
    setPname(pname)
    setPcountry(pcountry)
    setPcountryArea1(pcountryArea1)
    setPcountryArea2(pcountryArea2)
    setPhotel1(photel1)
    setPhotel2(photel2)
    setPactivity1(pactivity1)
    setPactivity2(pactivity2)
    setPprice(pprice)
    alert("Product Updated")
  }

  return (

<>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
        <div className="procedure-page">
        <div className="procedure-page-layer">

      <p className="procedure-title">User Account Control</p>
    </div>
    </div>

    <Tabs
  defaultActiveKey="customer"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 user-tabs  "
>
  <Tab eventKey="customer" title="Customers">
  <Container fluid className="profile-container user-profile-container">
  <div className="icon-logout">
        <DropdownButton className="drop-btn"
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title={<BsFillPersonFill />}
      >
        <Dropdown.Item eventKey="1">John Andrew</Dropdown.Item>
        
      </DropdownButton>
  </div>
    <h3 className="profile-header">User Account Control</h3>
    <h6>Account Information</h6>
      <Row className="inner-profile-container">
        <Col md={4} xs={6}>
        <p className="input-titles">Passport / NIC</p>
          <p className="input-titles" >First Name</p>
          <p className="input-titles" >Last Name</p>
          <p className="input-titles">E-mail</p>
          <p className="input-titles">Password</p>
          <p className="input-titles">Contact Number</p>
          <p className="input-titles">Address</p>
          <p className="input-titles">Sri Lankan?</p>
          <p className="input-titles">Nationality</p>
          <p className="input-titles">Country</p>
          <p className="input-titles">Reserved Packages</p>
          <p className="input-titles">Customized package Approval</p>
        </Col>
        <Col md={4} xs={6}>
        <div>
          <Form.Select  className="mb-2 mt-0 input-values" aria-label="Default select example">
    <option>9011811181 V</option>
    <option>9011821182 V</option>
    <option>9012811281 V</option>
</Form.Select>
          </div>
        <p className="input-values">{fname}</p>
          <p className="input-values">{lname}</p>
          <p className="input-values">{email}</p>
          <p className="input-values">{passport}</p>
          <p className="input-values">{number}</p>
          <p className="input-values">{address}</p>
          <p className="input-values">{srilanka}</p>
          <p className="input-values">{nationality}</p>
          <p className="input-values">{country}</p>
          <div >
<Form.Select  className="mb-1 mt-1 input-values" aria-label="Default select example">
    <option>None</option>
  <option value="package1">CT01</option>
  <option value="package2">CT02</option>
</Form.Select>
    <Form.Select  className="mb-1 mt-2 input-values" aria-label="Default select example">
    <option>None</option>
  <option value="package1">No</option>
  <option value="package2">Yes</option>
</Form.Select>

            
          </div>
        </Col>
        <Col md={4}  className="profile-image-container">

          <img className="profile-image" src={ProfileImage} />
          <h5>{fname} {lname}</h5>
         
          <UpdateProfileModal 
                         fname={fname}
                         setfname={setFname}
                         
                         lname={lname}
                         setlname={setLname}
                         
                         email={email}
                         setemail={setEmail}
                         
                         address={address}
                         setaddress={setAddress}
                         
                         passport={passport}
                         setpassport={setPassport}
                         
                         number={number}
                         setnumber={setNumber}
                         
                         
                         srilanka={srilanka}
                         setsrilanka={setSrilanka}
                         
                         nationality={nationality}
                         setnationality={setNationality}
                         
                         country={country}
                         setcountry={setCountry}
                        
                         show={modalShow}
                        
                         onHide={() => setModalShow(false)}
                                            />
                                             
          <Button className="profile-update-btn update-user " onClick={()=>alert("Account Cancelled")} >Cancell Account
          </Button>

        </Col>
      </Row>
   </Container>


  </Tab>
  <Tab eventKey="registerstaff" title="Register Staff">
  <Container fluid className="profile-container user-profile-container">
  <div className="icon-logout">
        <DropdownButton className="drop-btn"
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title={<BsFillPersonFill />}
      >
        <Dropdown.Item eventKey="1">Carl Pang</Dropdown.Item>
        
      </DropdownButton>
  </div>
    <h5>Create an Account</h5>
      <Row className="inner-profile-container">
        <Col md={4} xs={6}>
          <p className="input-titles  mb-4" >Staff ID</p>
          <p className="input-titles mt-3 mb-4" >First Name</p>
          <p className="input-titles mt-3 mb-4" >Last Name</p>
          <p className="input-titles mt-3 mb-4">E-mail</p>
          <p className="input-titles mt-3 mb-4">Contact Number</p>
          <p className="input-titles mt-3 mb-4">Address</p>
          <p className="input-titles mt-3 mb-4">Admin Control</p>
        </Col>
        <Col md={4} xs={6}>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setId(e.target.value)} type="text" value={id} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffFname(e.target.value)} type="text" value={stafffname} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffLname(e.target.value)} type="text" value={stafflname} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffEmail(e.target.value)} type="text" value={staffemail} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffNumber(e.target.value)} type="text" value={staffnumber} />
          </p>
        
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffAddress(e.target.value)} type="text" value={staffaddress} />
          </p>
        <div >

    <Form.Select  className="mb-1 mt-1 input-values" aria-label="Default select example">
  <option value="package1">No</option>
  <option value="package2">Yes</option>
</Form.Select>

            
          </div>
        </Col>
        <Col md={4}  className="profile-image-container">

          <img className="profile-image" src={ProfileImage} />
          <h5>{stafffname} {stafflname}</h5>
          
          <Button className="profile-update-btn staff-user " onClick={()=>alert("account created")} >Create Account
          </Button>
         
          
          <Button className="profile-update-btn staff-user " onClick={()=>alert("Staff Register Cancelled")}  >Cancel
          </Button>
         
        </Col>
      </Row>
   </Container>

  </Tab>
  <Tab eventKey="updateadmin" title="Update Admin">
  <Container fluid className="profile-container user-profile-container">
  <div className="icon-logout">
        <DropdownButton className="drop-btn"
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title={<BsFillPersonFill />}
      >
        <Dropdown.Item eventKey="1">Aanya Peace</Dropdown.Item>
        
      </DropdownButton>
  </div>
    <h5>Account Information</h5>
      <Row className="inner-profile-container">
        <Col md={4} xs={6}>
          <p className="input-titles mb-3" >Staff ID</p>
          <p className="input-titles mt-3 mb-4" >First Name</p>
          <p className="input-titles mt-3 mb-4" >Last Name</p>
          <p className="input-titles mt-3 mb-4">E-mail</p>
          <p className="input-titles mt-3 mb-4">Password</p>
          <p className="input-titles mt-3 mb-4">Contact Number</p>
          <p className="input-titles mt-3 mb-4">Address</p>
          <p className="input-titles mt-3 mb-4">Admin Control</p>
        </Col>
        <Col md={4} xs={6}>
        <div >

<Form.Select  className="mb-2 mt-1 input-values" aria-label="Default select example">
<option value="package1">00412</option>
<option value="package2">00413</option>
<option value="package2">00414</option>
<option value="package2">00415</option>
<option value="package2">00416</option>
</Form.Select>

        
      </div>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffFnameadmin(e.target.value)} type="text" value={stafffnameadmin} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffLnameadmin(e.target.value)} type="text" value={stafflnameadmin} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffEmailadmin(e.target.value)} type="text" value={staffemailadmin} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffPasswordAdmin(e.target.value)} type="text" value={passwordAdmin} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffNumberadmin(e.target.value)} type="text" value={staffnumberadmin} />
          </p>
        
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setStaffAddressadmin(e.target.value)} type="text" value={staffaddressadmin} />
          </p>
        <div >

    <Form.Select  className="mb-1 mt-1 input-values" aria-label="Default select example">
  <option value="package1">No</option>
  <option value="package2">Yes</option>
</Form.Select>

            
          </div>
        </Col>
        <Col md={4}  className="profile-image-container">

          <img className="profile-image" src={ProfileImage} />
          <h5>{stafffnameadmin} {stafflnameadmin}</h5>
          
          <Button className="profile-update-btn staff-user " onClick={()=>UpdateStaff()} >Update Account
          </Button>
         
          
          <Button className="profile-update-btn staff-user " onClick={()=>alert("Account Deleted")}  >Delete Account
          </Button>
         
        </Col>
      </Row>
   </Container>

  </Tab>
  <Tab eventKey="createpackages" title="Create Packages">
  <Container fluid className="profile-container user-profile-container">
  <div className="icon-logout">
        <DropdownButton className="drop-btn"
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title={<BsFillPersonFill />}
      >
        <Dropdown.Item eventKey="1">Anaya Peace</Dropdown.Item>
        
      </DropdownButton>
  </div>
    <h5>Package Information</h5>
      <Row className="inner-profile-container">
        <Col md={4} xs={6}>
          <p className="input-titles  mb-4" >Package Code </p>
          <p className="input-titles mt-3 mb-4" >Package Name</p>
          <p className="input-titles mt-3 mb-4" >Country</p>
          <p className="input-titles mt-3 mb-4">Country Area</p>
          <p className="input-titles mt-3 mb-4">Number of Night(s)</p>
          <p className="input-titles mt-3 mb-4">Weekly Schedule</p>
          <p className="input-titles mt-3 mb-4">Date</p>
          <p className="input-titles mt-3 mb-4">Hostel(s)</p>
          <p className="input-titles mt-3 mb-4">Activities(ies)</p>
          <p className="input-titles mt-3 mb-4">Overview-package (Description)</p>
          <p className="input-titles mt-3 mb-4  price-text">Price Per Person</p>
        </Col>
        <Col md={4} xs={6}>
        <div >

<Form.Select  className="mb-3 mt-1 input-values" aria-label="Default select example">
<option value="package1">00412</option>
<option value="package2">00413</option>
<option value="package2">00414</option>
<option value="package2">00415</option>
<option value="package2">00416</option>
</Form.Select>

        
      </div>

        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPname(e.target.value)} type="text" value={pname} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPcountry(e.target.value)} type="text" value={pcountry} />
          </p>
          <div className="set-alignment">
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPcountryArea1(e.target.value)} type="text" value={pcountryArea1} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPcountryArea2(e.target.value)} type="text" value={pcountryArea2} />
          </p>
        </div>

        <Form.Select  className="mb-3 input-values" aria-label="Default select example">
  <option value="package1">5</option>
  <option value="package1">3</option>
  <option value="package2">2</option>
</Form.Select>
            

        <Form.Select  className="mb-3 input-values" aria-label="Default select example">
  <option value="package1">Friday</option>
  <option value="package1">Monday</option>
  <option value="package2">Turesday</option>
</Form.Select>
            
         
          <div className="set-alignment mb-3 ">
          <DatePicker className=" date" className="date-picker"   selected={startDate} onChange={(date) => setStartDate(date)} />

  <DatePicker className="mb-2 mt-2 date" className="date-picker"   selected={endDate} onChange={(date) => setEndDate(date)} />


        </div>
        <div className="set-alignment">
        
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPhotel1(e.target.value)} type="text" value={photel1} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPhotel2(e.target.value)} type="text" value={photel2} />
          </p>
        </div>
        <div className="set-alignment">
        
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPactivity1(e.target.value)} type="text" value={pactivity1} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPactivity2(e.target.value)} type="text" value={pactivity2} />
          </p>
        </div>
        <p className="input-values overview-package ">
        This Package Comes As stay in two hotels city hotel and island cool hotel for 3 nights. The tourist may enjoy the activities of hiking and outdoor visits.............. 
          </p>
        
        <div >
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPprice(e.target.value)} type="text" value={pprice} />
          </p>
         
          </div>
        </Col>
        <Col md={4}  className="profile-image-container package-btn">

          
          <Button className="profile-update-btn   " onClick={()=>alert("Package Created")} >Create package
          </Button>
         
          
          <Button className="profile-update-btn  " onClick={()=>alert("Package Cancelled")} >Cancel
          </Button>
         
        </Col>
      </Row>
   </Container>

  </Tab>
  <Tab eventKey="Update Packages" title="Update Packages">
  <Container fluid className="profile-container user-profile-container">
  <div className="icon-logout">
        <DropdownButton className="drop-btn"
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title={<BsFillPersonFill />}
      >
        <Dropdown.Item eventKey="1">Anaya Peace</Dropdown.Item>
        
      </DropdownButton>
  </div>
    <h5>Package Information</h5>
      <Row className="inner-profile-container">
        <Col md={4} xs={6}>
          <p className="input-titles  mb-4" >Package Code </p>
          <p className="input-titles mt-3 mb-4" >Package Name</p>
          <p className="input-titles mt-3 mb-4" >Country</p>
          <p className="input-titles mt-3 mb-4">Country Area</p>
          <p className="input-titles mt-3 mb-4">Number of Night(s)</p>
          <p className="input-titles mt-3 mb-4">Weekly Schedule</p>
          <p className="input-titles mt-3 mb-4">Date</p>
          <p className="input-titles mt-3 mb-4">Hostel(s)</p>
          <p className="input-titles mt-3 mb-4">Activities(ies)</p>
          <p className="input-titles mt-3 mb-4 ">Overview-package (Description)</p>
          <p className="input-titles mt-3 mb-4 price-text">Price Per Person</p>
        </Col>
        <Col md={4} xs={6}>
        <div >

<Form.Select  className="mb-3 mt-1 input-values" aria-label="Default select example">
<option value="package1">00412</option>
<option value="package2">00413</option>
<option value="package2">00414</option>
<option value="package2">00415</option>
<option value="package2">00416</option>
</Form.Select>

        
      </div>

        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPname(e.target.value)} type="text" value={pname} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPcountry(e.target.value)} type="text" value={pcountry} />
          </p>
          <div className="set-alignment">
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPcountryArea1(e.target.value)} type="text" value={pcountryArea1} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPcountryArea2(e.target.value)} type="text" value={pcountryArea2} />
          </p>
        </div>

        <Form.Select  className="mb-3 input-values" aria-label="Default select example">
  <option value="package1">5</option>
  <option value="package1">3</option>
  <option value="package2">2</option>
</Form.Select>
            

        <Form.Select  className="mb-3 input-values" aria-label="Default select example">
  <option value="package1">Friday</option>
  <option value="package1">Monday</option>
  <option value="package2">Turesday</option>
</Form.Select>
            
         
          <div className="set-alignment mb-3 ">
          <DatePicker className=" date" className="date-picker"   selected={startDate} onChange={(date) => setStartDate(date)} />

  <DatePicker className="mb-2 mt-2 date" className="date-picker"   selected={endDate} onChange={(date) => setEndDate(date)} />


        </div>
        <div className="set-alignment">
        
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPhotel1(e.target.value)} type="text" value={photel1} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPhotel2(e.target.value)} type="text" value={photel2} />
          </p>
        </div>
        <div className="set-alignment">
        
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPactivity1(e.target.value)} type="text" value={pactivity1} />
          </p>
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPactivity2(e.target.value)} type="text" value={pactivity2} />
          </p>
        </div>
        <p className="input-values overview-package ">
        This Package Comes As stay in two hotels city hotel and island cool hotel for 3 nights. The tourist may enjoy the activities of hiking and outdoor visits.............. 
          </p>
        
        <div >
        <p className="input-values">
        <Form.Control className="staff-input" onChange={(e)=>setPprice(e.target.value)} type="text" value={pprice} />
          </p>
         
          </div>
        </Col>
        <Col md={4}  className="profile-image-container package-btn">

          
          <Button className="profile-update-btn   " onClick={()=>packageUpdated()} >Update package
          </Button>
         
          
          <Button className="profile-update-btn  " onClick={()=>alert("Package Deleted")}  >Delete Package
          </Button>
         
        </Col>
      </Row>
   </Container>

  </Tab>
  </Tabs>
         <FooterComp />
</>
  );
}

export default UserAccount;
