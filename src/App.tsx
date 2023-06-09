import { useForm, SubmitHandler } from "react-hook-form";
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { UserList } from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import FormData from "./Interfaces/FormData";
import Header from "./components/Header";
import User from "./Interfaces/User";
import getUserWithId from "./utils/getUserWithId";
import FormDataCopy from "./Interfaces/FormDataCopy";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, reset } = useForm<FormData>({
    mode: "onChange",
  });
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [userList, setUserList] = useState<User[]>([]);

  const addUser = () => {
    let newStateList = [...userList];
    let userData = getUserWithId(watch());
    newStateList.push(userData);
    setUserList(newStateList);

    //cleanup
    reset();
    onClose();
  };

  const onDeleteUser = (id: string) => {
    console.log(id);
    let newListState = userList.filter((user: User) => user.id !== id);
    setUserList(newListState);
  };

  const onSubmit: SubmitHandler<Partial<FormDataCopy>> = (data) => {
    addUser();
    console.log(data);
  };

  const onToggleStatus = (stateTo: string, id: string) => {
    let newListState = [...userList];
    let index = newListState.findIndex((item) => item.id === id);
    if (!Boolean(index >= 0)) return;
    if (stateTo === "disable") {
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
        <UserList
          userList={userList}
          onToggleStatus={onToggleStatus}
          onDeleteUser={onDeleteUser}
        />
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
