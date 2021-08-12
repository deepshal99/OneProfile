import React from 'react';
import styles from './Modal.module.css';
import MultiStep from '../MultiStep'
import { useDisclosure } from "@chakra-ui/react"
import { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react"


function ManualClose() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    // Runs once, after mounting
    onOpen();
  });

  return (
    <div className={styles.Modal}>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <MultiStep />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Finish
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ManualClose