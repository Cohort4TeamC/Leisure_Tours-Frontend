import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '../components/textField'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, Card, ListGroup, Form, Button,Row,Col } from 'react-bootstrap';
import Forgetpassmodel from './forgetpassmodel';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const SignUp = () => {
    let history = useHistory();

    const [currentUser,setCurrentUser]=useState({})

    const [modalShow, setModalShow] = useState(false);



    const Validate = yup.object({
        email: yup.string()
            .email('Email is Invalid')
            .required('Required'),
        password: yup.string()
            .min(6, 'Password Must Be At Least 6 Characters')
            .required('Required'),

    })
    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={values => {
    
   
                setCurrentUser(values)
        history.push("/profile");
              
            }}
            
            validationSchema={Validate}

        >
            {formik => (
    <div className="signUp-page">

    <Container   >
 <Row className="row-signup" >
 
 <Col className=""  md={8} >
         <h1 className="main-title account-create">Please Login to Your Account</h1>
         
         </Col>
                     <Col md={4} >
                     <Container className="login-container">
                        <Card className="card-class" style={{ width: '18rem', }}>
                            <Card.Body >
                                <Card.Title className="login-title" >Log In</Card.Title>

                            </Card.Body>
                            <Card.Body>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3 email" controlId="formBasicEmail">
                                        <TextField type="email" name="email" placeholder="Enter email" />
                                        
                                    </Form.Group>

                                    <Form.Group className="mb-3 password" controlId="formBasicPassword">
                                        <TextField type="password" name="password" placeholder="Password" />
                                        <Form.Text >
                                
                                            <Forgetpassmodel 
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            />
                                        </Form.Text>
                                    </Form.Group>

                                    <div className="btn-submit">
                                        <Button variant="dark" type="submit">
                                            Log In
                                        </Button>
                                    </div>
                                    <p variant="primary" className="dont-have-account" >
                Don't have an account? <Link className="forget-password" to="signup" >Sign Up</Link>
            </p>
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
    );
}

export default SignUp;
