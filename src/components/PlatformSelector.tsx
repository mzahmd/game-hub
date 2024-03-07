import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number
}

export default function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data, error } = usePlatform()
  const selectedPlatform = usePlatforms(selectedPlatformId)
  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) =>
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}