import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"
import SearchInput from "./SearchInput";

export default function Navbar() {
  return <HStack padding="10px">
    <Image src={logo} boxSize="60px" />
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
}
