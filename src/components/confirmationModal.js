import React from 'react';
import '../pages/booktour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="confirm-modal-header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="confirmation-modal">
          <h5>An Email Hase Been Sent To Leisure Tours</h5>
          <p>
            Kindly check your approval status under user profile to get updated !<br />
            NOTE: Updates may take place anytime within 48 hours.
          </p>
        </Modal.Body>
      
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;