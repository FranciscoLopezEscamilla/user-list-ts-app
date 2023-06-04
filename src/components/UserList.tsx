import UserRow from "./UserRow";
import { Stack } from "@chakra-ui/react";
import User from "../Interfaces/User";

interface UserListProps {
  userList: User[];
  onToggleStatus: (stateTo: string, id: string) => void;
}

export const UserList: React.FC<UserListProps> = ({
  userList,
  onToggleStatus,
}) => {
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
            isActive={item.isActive}
            onToggleStatus={onToggleStatus}
          ></UserRow>
        );
      })}
    </Stack>
  );
};
