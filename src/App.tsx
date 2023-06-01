import { useRef, useState } from "react";
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import { UserList } from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import { useDisclosure } from "@chakra-ui/react";

const App = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [userList, setUserList] = useState([
    {
      id: "1",
      firstName: "Dan",
      lastName: "Abrahmov",
      imageUrl: "https://bit.ly/dan-abramov",
      email: "dan@gmail.com",
      active: true,
    },
  ]);

  const [formName, setFormName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formImageUrl, setFormImageUrl] = useState("");
  const [formIsActive, setFormIsActive] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(event.target.value);
  };

  const handleOnChangeLastName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormLastName(event.target.value);
  };

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormEmail(event.target.value);
  };

  const handleOnChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormImageUrl(event.target.value);
  };

  const handleOnChangeIsActive = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.checked);
    setFormIsActive(event.target.checked);
  };

  const addUser = () => {
    let newStateList = [...userList];
    newStateList.push(getGeneratedUser());
    setUserList(newStateList);
    resetFormToDefault();
    onClose();
  };

  const getGeneratedUser = () => {
    return {
      id: crypto.randomUUID(),
      firstName: formName,
      lastName: formLastName,
      imageUrl: "https://bit.ly/dan-abramov",
      email: formEmail,
      active: formIsActive,
    };
  };

  const resetFormToDefault = () => {
    setFormIsActive(false);
    setFormName("");
    setFormLastName("");
    setFormEmail("");
  };

  return (
    <Box h={windowSize.current[1]}>
      <AbsoluteCenter w={"600px"}>
        <Header
          onOpen={onOpen}
          addUserFn={addUser}
          userCount={userList.length}
        />
        <UserList userList={userList} />
        <AddUserModal
          handleOnChangeLastName={handleOnChangeLastName}
          handleOnChangeName={handleOnChangeName}
          isOpen={isOpen}
          onClose={onClose}
          onClickAdd={addUser}
          handleOnChangeEmail={handleOnChangeEmail}
          handleOnChangeUrl={handleOnChangeUrl}
          handleOnChangeIsActive={handleOnChangeIsActive}
          isChecked={formIsActive}
        />
      </AbsoluteCenter>
    </Box>
  );
};

export default App;
