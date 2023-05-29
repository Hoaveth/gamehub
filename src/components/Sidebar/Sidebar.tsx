import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import MenuCard from "./MenuCard";

const Sidebar = () => {
  return (
    <>
      <Text fontSize="2xl" fontWeight={"bold"} margin={"10px 0px"}>
        Genres
      </Text>
      <Flex direction={"column"}>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </Flex>
    </>
  );
};

export default Sidebar;
