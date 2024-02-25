import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeScript() {
  const {toggleColorMode, colorMode} = useColorMode()

  return (
    <HStack>
      <Switch colorScheme={"green"} isChecked={colorMode==="dark"} onChange={toggleColorMode}></Switch>
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  )
}