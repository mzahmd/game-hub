import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform:  Platform | null
}

export default function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatform()

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ||  "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform =>
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}