import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}

export default function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : ""
  return (
    <Badge colorScheme={color} fontSize={"14px"} padding={2} borderRadius={"4px"}>{score}</Badge>
  )
}