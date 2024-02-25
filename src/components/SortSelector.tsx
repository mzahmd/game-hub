import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame"

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform:  Platform | null
}

export default function SortSelector() {
  const { data, error } = usePlatform()

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by Relevance"}
      </MenuButton>
      <MenuList>
        {/* {data.map(platform => */}
          {/* <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem> */}
        {/* )} */}
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
      </MenuList>
    </Menu>
  )
}