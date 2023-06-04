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
import {
  UseFormHandleSubmit,
  UseFormRegister,
  SubmitHandler,
} from "react-hook-form";
import FormData from "../Interfaces/FormData";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  register: UseFormRegister<FormData>;
  onSubmit: SubmitHandler<FormData>;
}

const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  handleSubmit,
  register,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input {...register("firstName")} />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input {...register("lastName")} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input {...register("imageUrl")} />
            </FormControl>
            <FormControl>
              <Checkbox {...register("isActive")}>Is Active</Checkbox>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit" mr={3}>
              Add User
            </Button>
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddUserModal;
