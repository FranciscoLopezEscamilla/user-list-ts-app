import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Checkbox,
} from "@chakra-ui/react";
import AddUserModalProps from "../Interfaces/AddUserModalProps";

const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  onClickAdd,
  handleOnChangeName,
  handleOnChangeLastName,
  handleOnChangeEmail,
  handleOnChangeUrl,
  handleOnChangeIsActive,
  isChecked,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input onChange={handleOnChangeName} />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input onChange={handleOnChangeLastName} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input onChange={handleOnChangeEmail} />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input onChange={handleOnChangeUrl} />
          </FormControl>
          <FormControl>
            <Checkbox
              defaultChecked={isChecked}
              onChange={handleOnChangeIsActive}
            >
              Is Active{" "}
            </Checkbox>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          {" "}
          <Button colorScheme="blue" mr={3} onClick={onClickAdd}>
            Add User
          </Button>
          <Button onClick={onClose} variant="ghost">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
