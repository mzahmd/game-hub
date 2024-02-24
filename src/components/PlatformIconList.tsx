import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGame"
import { IconType } from "react-icons"

interface Props {
  platforms: Platform[]
}

export default function Platform({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack marginY={1}>
      {platforms.map(platform =>
        <Icon key={platform.slug} as={iconMap[platform.slug]} color={"gray.500"}/>
      )}
    </HStack>

  )
}