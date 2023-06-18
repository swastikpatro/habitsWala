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

const HabitModal = ({
  isAdding = false,
  isEditing = false,
  habitData,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isAdding ? 'Add' : 'Edit'} Habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form onClose={onClose} />
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HabitModal;
