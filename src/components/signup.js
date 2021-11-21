import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup, Form, Button,Row,Col } from 'react-bootstrap';
import TextField from '../components/textField'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const SignUp = (props) => {

  let history = useHistory();

  const [checked,setChecked]=useState(true)
  const [agreement,setAgreement]=useState(true)

  const NotChecked=(e)=>{
   
    setChecked(false)
  }
  const Checked=(e)=>{
   
    setChecked(true)

  }


  const Validate = yup.object({
    firstName: yup.string()
      .max(15, 'Must Be 15 Characters or Less')
      .required('Required'),
    lastName: yup.string()
      .max(20, 'Must Be 20 Characters or Less')
      .required('Required'),
    email: yup.string()
      .email('Email is Invalid')
      .required('Required'),
    password: yup.string()
      .min(6, 'Password Must Be At Least 6 Characters')
      .required('Required'),
    Confirmpassword: yup.string()
      .min(6, 'Password Must Be At Least 6 Characters')
      .required('Required'),
    nationality: yup.string()
      .required('Required'),
    passport: yup.string()
      .required('Required'),
    contact: yup.string()
      .required('Required'),
    address: yup.string()
      .required('Required'),
  })

  const [users, setUsers] = useState([])
 
  return (
    <>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        passport:'',
        nationality:'',
        password:'',
        group1:'',
        password: '',
        Confirmpassword: '',
        contact: '',
        address: '',
        email: '',
      }}
      onSubmit={values => {
        users.push(values)
        setUsers([...users])
        history.push("/profile");

      }}

      validationSchema={Validate}
    >

      {formik => (
    <div className="signUp-page">

   <Container   >
<Row className="row-signup" >

<Col className=""  md={8} >
        <h1 className="main-title account-create">Create An Account</h1>
        
        </Col>
                    <Col md={4} >
<Container className="signup-container">
            <Card  className="card-class" style={{ width: '22rem', }}>
            <Card.Body className="cardBody">
              <Card.Title className="signup-title">Sign Up</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
            </ListGroup>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}  >
              <div className="two-inputs">
                <Form.Group className="inputs-two"  controlId="formBasicPassword">
                  <TextField type="text" name="firstName" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="inputs-two"  controlId="formBasicPassword">
                  <TextField type="text" name="lastName" placeholder="Last Name" />
                </Form.Group>
</div>
              <div className="two-inputs">
                <Form.Group className="inputs-two"  controlId="formBasicPassword">
                  <TextField type="text" name="contact" placeholder="Contact Number" />
                </Form.Group>

                <Form.Group className="inputs-two"  controlId="formBasicPassword">
                  <TextField type="text" name="email" placeholder="Email ID" />
                </Form.Group>
</div>
            <Form.Group  controlId="formBasicPassword">
                  <TextField type="text" name="address" placeholder="Address" />
                </Form.Group>
                <Form.Group  controlId="formBasicEmail">
                  <Form.Text className="srilankan">
                    Are You Sri Lankan ?
                  </Form.Text>
                </Form.Group>

                {['radio'].map((type) => (
                  <div key={`inline-${type}`} >
                    <Form.Check
                      inline
                      onClick={(e)=>Checked(e)}
                      label="Yes"
                      name="group1"
                    defaultChecked
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      onClick={(e)=>NotChecked(e)}
                      label="No"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}

                  
                <Form.Select className="drop-down-country" disabled={checked ? true : false} aria-label="Default select example">
                  <option>Select Country</option>
                  <option value="Country1">Canada</option>
                  <option value="Country2">China</option>
                  <option value="Country3">India</option>
                </Form.Select>

                <Form.Group  controlId="formBasicPassword">
                  <TextField type="text" name="nationality" placeholder="Nationality" />

                </Form.Group>

                <Form.Group  controlId="formBasicPassword">
                  <TextField type="text" name="passport" placeholder="Passport/NIC" />
                </Form.Group>
                <div className="two-inputs">

                <Form.Group className="inputs-two"  controlId="formBasicPassword">
                  <TextField type="password" name="password" placeholder="Password" />
                
                </Form.Group>
                <Form.Group className="inputs-two" controlId="formBasicPassword">
                  <TextField type="password" name="Confirmpassword" placeholder="Confirm Password" />
                </Form.Group>
                </div>
                <Form.Group  controlId="formBasicCheckbox">
    <Form.Check type="checkbox" onClick={()=>setAgreement(!agreement)} label="I agree the terms and conditions" />
  </Form.Group>
                <div className="btn-submit" >
                  
                  <Button variant="dark" type="submit" disabled={agreement ? true : false} >
                    Sign Up
                  </Button>
                </div>
                <Form.Group  className="already-account" controlId="formBasicPassword">
                  <Form.Text >
                    Already have an account? <Link className="signin-btn" to="/signin" >Sign in</Link>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>


                  </Container>
            </Col>


</Row>
</Container>

</div>


      )}

    </Formik>
  </>
  );
}

export default SignUp;
