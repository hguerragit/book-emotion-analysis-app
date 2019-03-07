import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactModal from 'react-modal';


























const CustomModal = ({isOpen, className}) => (
  <div>
    <Modal id="custom-modal"className={className} isOpen={isOpen}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">
          Close
              </Button>
        <Button variant="primary">
          Save Changes
              </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default CustomModal;