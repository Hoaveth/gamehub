import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        id="color-mode"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize={"xs"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
