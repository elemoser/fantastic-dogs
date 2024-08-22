import { Avatar, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Avatar size="md" src="https://bit.ly/broken-link" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
