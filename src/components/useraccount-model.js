import '../pages/profile.css';
import React,{useState} from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { Container, Button,Modal,ListGroup } from 'react-bootstrap';
import TextField from './textField2'

const UpdateProfile = (props) => {


    const [show, setShow] = useState(false);

    const handleClose = () =>  {
        setShow(false)
        
    }
    const handleShow = () => {
        setShow(true)
        
        
    };
    
    const Validate = yup.object({
       
      firstName: yup.string(),
          lastName: yup.string(),
          email: yup.string(),
          number: yup.string(),
          passport: yup.string(),
          address: yup.string(),
          nationality: yup.string(),
          country: yup.string(),
    })
 
    return (
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          passport: '',
          address: '',
          nationality: '',
          country: '',
        }}
        validationSchema={Validate}
        onSubmit={values => {
          handleClose()
        console.log(values)

          }}
        
      >
          
      {formik => (
          
          <>
           
            <Button className="profile-update-btn update-user "  onClick={()=>handleShow()}>Update Information
          </Button>

            <Modal className="forget-container profile-forget-container"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    


        <div className="">

          <Container >
             
              <ListGroup className="list-group-flush">
              </ListGroup>
                <Form onSubmit={formik.handleSubmit}>

                    <TextField type="text" name={props.fname} setName={props.setfname} placeholder="First Name"   />
                    <TextField type="text" name={props.lname} setName={props.setlname} placeholder="Last Name" />
                    <TextField type="email" name={props.email} setName={props.setemail} placeholder="Email" />
                    <TextField type="text" name={props.passport} setName={props.setpassport} placeholder="Passport" />
                    <TextField type="text" name={props.number} setName={props.setnumber} placeholder="Number" />
                    <TextField type="text" name={props.address} setName={props.setaddress} placeholder="Addrress" />
                    <TextField type="text" name={props.srilanka} setName={props.setsrilanka} placeholder="Sri Lankan" />
                    <TextField type="text" name={props.nationality} setName={props.setnationality} placeholder="Sri Lankan" />
                    <TextField type="text" name={props.country} setName={props.setcountry} placeholder="Country" />
                  <div className="btn-submit">
                  <Button variant="primary"  className="profile-update-btn " type="submit" >Update</Button>
</div>
                </Form>

          </Container>
        </div>
                </Modal.Body>
            </Modal>
        </>
      )}

    </Formik>                    
    );
}

export default UpdateProfile;