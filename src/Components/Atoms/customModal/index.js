import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal(props) {
  const handleClose = () => {
    props.setShowModal(false);
  };

  // const handleSubmit =()=>{
  //     console.log('Modal submitted');
  //     props.setShowModal(false);
  //   }

  return (
    <>
      <Modal
        show={props.showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {props.header ? (
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
        ) : null}
        <Modal.Body>{props.children}</Modal.Body>
        {props.footer ? (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={props.onSubmitModal}>
              {props.btnText}
            </Button>
          </Modal.Footer>
        ) : null}
      </Modal>
    </>
  );
}

export default CustomModal;
