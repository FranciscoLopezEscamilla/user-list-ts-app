import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {
  userCount: number;
  onOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ userCount, onOpen }) => {
  return (
    <Flex alignItems={"center"}>
      <Heading>User Manager ({userCount})</Heading>
      <Button onClick={onOpen} colorScheme="blue" type="submit" m={2}>
        Agregar
      </Button>
    </Flex>
  );
};

export default Header;
