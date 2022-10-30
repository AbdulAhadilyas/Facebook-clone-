import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalWin(props) {

  return (
  
    <>

      <Modal show={props.show} onHide={props.hide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <form onSubmit={props.submitForm}>
        <textarea name="" id="" cols="29 " rows="10" onChange={
          props.getInput
        }></textarea>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.submitForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalWin;