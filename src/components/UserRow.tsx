import React from "react";
import { Flex, Avatar, Text, IconButton, AvatarBadge } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import User from "../Interfaces/User";

const UserRow: React.FC<User> = ({
  id,
  firstName,
  lastName,
  imageUrl,
  email,
  active,
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
        <AvatarBadge boxSize="1em" bg={active ? "green.500" : "red.500"} />
      </Avatar>
      <Text fontSize={"md"}>
        {firstName} {lastName} ({email})
      </Text>
      <Flex>
        <IconButton aria-label="Busy" icon={<CloseIcon />} />
        <IconButton aria-label="Available" icon={<CheckIcon />} />
        <IconButton aria-label="Delete" icon={<DeleteIcon />} />
      </Flex>
    </Flex>
  );
};

export default UserRow;
