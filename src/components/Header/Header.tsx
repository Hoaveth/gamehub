import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize={"60px"} />
      <InputGroup size="sm">
        <Input placeholder="Search for a game..." />
        <InputRightAddon children={<Icon as={AiOutlineSearch} />} />
      </InputGroup>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
