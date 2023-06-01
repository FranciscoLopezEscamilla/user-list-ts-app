import UserRow from "./UserRow";
import { Stack } from "@chakra-ui/react";
import UserListProps from "../Interfaces/UserListProps";

export const UserList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <Stack>
      {userList.map((item) => {
        return (
          <UserRow
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            imageUrl={item.imageUrl}
            email={item.email}
            active={item.active}
          ></UserRow>
        );
      })}
    </Stack>
  );
};
