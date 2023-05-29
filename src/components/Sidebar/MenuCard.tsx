import { HStack, Image, Text } from "@chakra-ui/react";

const MenuCard = () => {
  return (
    <HStack marginBottom={"10px"}>
      <Image
        borderRadius="10px"
        boxSize="50px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text>Action</Text>
    </HStack>
  );
};

export default MenuCard;
