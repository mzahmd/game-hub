import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatforms(gameQuery.platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>{heading}</Heading>
  )
}