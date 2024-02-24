import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode
}

export default function GameCardContainer({children}: Props) {
  return (
    <Box width={"300px"} borderRadius={10} overflow={"hidden"}>
      {children}      
    </Box>
  )
}