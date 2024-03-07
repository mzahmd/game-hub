import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres()
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)

  const { data: platforms } = usePlatform()
  const platform = platforms?.results.find(g => g.id === gameQuery.genreId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>{heading}</Heading>
  )
}