import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch id="color-mode" onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeSwitch;
