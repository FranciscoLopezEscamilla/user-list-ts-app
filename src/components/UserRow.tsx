import React from "react";
import { Flex, Avatar, Text, IconButton, AvatarBadge } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import User from "../Interfaces/User";

interface UserRowProps extends User {
  onToggleStatus: (stateTo: string, id: string) => void;
}

const UserRow: React.FC<UserRowProps> = ({
  firstName,
  lastName,
  imageUrl,
  email,
  isActive,
  onToggleStatus,
  id,
}) => {
  return (
    <Flex
      w={"100%"}
      px={5}
      backgroundColor={"gray.100"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={8}
    >
      <Avatar m={2} size={"md"} name="Dan Abrahmov" src={imageUrl}>
        <AvatarBadge boxSize="1em" bg={isActive ? "green.500" : "red.500"} />
      </Avatar>
      <Text fontSize={"md"}>
        {firstName} {lastName} ({email})
      </Text>
      <Flex>
        <IconButton
          aria-label="Busy"
          icon={<CloseIcon />}
          onClick={() => onToggleStatus("deactivate", id)}
        />
        <IconButton
          aria-label="Available"
          icon={<CheckIcon />}
          onClick={() => onToggleStatus("activate", id)}
        />
        <IconButton aria-label="Delete" icon={<DeleteIcon />} />
      </Flex>
    </Flex>
  );
};

export default UserRow;
