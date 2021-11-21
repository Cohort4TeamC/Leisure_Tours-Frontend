import './login.css';
import React,{useState} from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, Card, Form, Button,Modal,ListGroup } from 'react-bootstrap';
import TextField from '../components/textField'

const Forgetpassmodel = (props) => {

    const [forgetPassValues,setForgetPassValues]=useState({})

    const [show, setShow] = useState(false);
    const [requestShow, setRequestShow] = useState(false);

    const handleClose = (email) =>  {
      setShow(false);
      setRequestShow(false)
     
        
        
    }
    const sendRequest=(email)=>{
      {email == "" ? setRequestShow(false):setRequestShow(true)}
    }
    const handleShow = (email) => {
        setShow(true)
        
        
    };
    const Validate = yup.object({
       
        email: yup.string()
          .email('Email is Invalid')
          .required('Required'),
      })
    

    return (
        <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={values => {
            {values.email ="" ? 
            values.email ="" 
            :

            setForgetPassValues(values)
            sendRequest(values.email)
        }

          }}
        
        validationSchema={Validate}
      >
          
      {formik => (
          
          <>
            <a variant="primary" className="forget-password" onClick={()=>handleShow(formik.values.email,formik.values.newPassword)}>
                Forget Password
            </a>

            <Modal className="forget-container"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title ></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    



          <Container className={requestShow ? "request-hide" : "request-show" } >
            <h4 className="request-sent">Please Enter Your Registered Email</h4>
             
              <ListGroup className="list-group-flush">
              </ListGroup>
                <Form onSubmit={formik.handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="email" name="email" placeholder="Email" />
                  </Form.Group>
              
                  <div className="btn-submit">
                  <Button variant="primary" type="submit" >Request Password Reset</Button>
</div>
                </Form>

          </Container>
          <Container className={requestShow ? "request-show" : "request-hide" }>
            <h4 className="request-sent" >Request Send Successfully</h4>
          </Container>
                </Modal.Body>
            </Modal>
        </>
      )}

    </Formik>                    
    );
}

export default Forgetpassmodel;