import { useForm, SubmitHandler } from "react-hook-form";
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { UserList } from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import FormData from "./Interfaces/FormData";
import Header from "./components/Header";
import User from "./Interfaces/User";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, reset } = useForm<FormData>({
    mode: "onChange",
  });
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [userList, setUserList] = useState<User[]>([]);

  const addUser = () => {
    let newStateList = [...userList];
    let formData = watch();
    let userData = {
      id: crypto.randomUUID(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      imageUrl: formData.imageUrl,
      email: formData.email,
      isActive: formData.isActive,
    };
    newStateList.push(userData);
    setUserList(newStateList);
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    addUser();
    console.log(data);
  };

  const onToggleStatus = (stateTo: string, id: string) => {
    let newListState = [...userList];
    let index = newListState.findIndex((item) => item.id === id);
    if (!Boolean(index >= 0)) return;
    if (stateTo === "deactivate") {
      newListState[index].isActive = false;
    } else {
      newListState[index].isActive = true;
    }
    setUserList(newListState);
  };

  return (
    <Box h={windowSize.current[1]}>
      <AbsoluteCenter w={"600px"}>
        <Header onOpen={onOpen} userCount={userList.length} />
        <UserList userList={userList} onToggleStatus={onToggleStatus} />
        <AddUserModal
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
        />
      </AbsoluteCenter>
    </Box>
  );
};

export default App;
