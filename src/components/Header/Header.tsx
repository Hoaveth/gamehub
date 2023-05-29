import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize={"60px"} />
      <Text>Header</Text>
    </HStack>
  );
};

export default Header;
