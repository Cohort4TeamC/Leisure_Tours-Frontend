import React from 'react';
import './availability.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header className="search-modal-header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="search-modal-container">
          <h4>Search Results......</h4>
         
        <ul className="search-modal-list">
            <li className="search-checkbox">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Code 2109 | Price: $ XXX" />
  </Form.Group>
            </li>
            <li >
                Tour Country: <span>{props.data.Country}</span>
            </li>
            <li>
                No. of Nights: <span>{props.data.Days}</span>
            </li>
            <li>
                Travel start date: <span>{props.data.day} - {props.data.month} - {props.data.year}</span>
            </li>
        </ul>
            </Modal.Body>
        
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;