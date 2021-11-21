import './customerinquiry.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FooterComp from '../components/footer';
import TextField from '../components/textField';
import TextArea from '../components/textArea';

import { useState } from 'react';


const CustomerInquiry = Yup.object().shape({
  message: Yup.string()
    .min(10, 'Too Short!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Customerinquiry = () => {

    const [inquiryData,setInquiryData]=useState([])
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
        <div className="inquiry-page">
        <div className="inquiry-page-layer">

      <p className="inquiry-title">Customer Inquiry</p>
    </div>
    </div>
    <Container className="inquiry-form-container">
    <Formik
       initialValues={{
         email: '',
         phoneNumber: '',
         message: '',
       }}
       validationSchema={CustomerInquiry}
       onSubmit={values => {
         inquiryData.push(values)
         setInquiryData([...inquiryData])
         console.log(values);
         console.log(inquiryData);

       }}
     >
        {({ errors, touched }) => (
    <Form >
  <TextField label="Email" type="emai" name="email" placeholder="Email" />
  
  <TextField label="Phone Number" type="text" name="phoneNumber" placeholder="Phone Number" />
  <TextArea label="Message" type="textarea" name="message" placeholder="Message" />
 

  <Button className="inquiry-submit-btn" type="submit">
    Submit
  </Button>
</Form>
  )}
</Formik>
    </Container>
        
      <FooterComp />
</>
  );
}

export default Customerinquiry;
