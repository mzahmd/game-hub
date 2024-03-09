import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode
}

export default function GameCardContainer({children}: Props) {
  return (
    <Box _hover={{ transform: "scale(1.03)", transition: "transform .15s ease-in" }} borderRadius={10} overflow={"hidden"}>
      {children}      
    </Box>
  )
}