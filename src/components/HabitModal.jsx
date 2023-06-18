/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Form from './Form';

const HabitModal = ({ isAdding = true, edittingData, isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isAdding ? 'Add' : 'Edit'} Habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            isAdding={isAdding}
            edittingData={edittingData}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HabitModal;
