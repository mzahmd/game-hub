import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
  children: string
}

export default function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const limit = 300

  if (!children) {
    return null
  }

  const summary = expanded ? children : children.substring(0, limit) + "... "

  if (children.length <= limit) {
    return <Text>{children}</Text>
  }

  return (
    <Text>
      {summary}
      <Button size={"xs"} marginLeft={5} fontWeight={"bold"} colorScheme={"yellow"} onClick={() => setExpanded(!expanded)}>{expanded ? "ShowLless" : "Read More"}</Button>
    </Text>
  )
}