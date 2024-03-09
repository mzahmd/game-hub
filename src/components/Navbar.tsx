import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"cover"}/>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}
