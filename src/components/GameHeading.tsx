import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

export default function GameHeading() {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = useGenre(genreId)

  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatforms(platformId)



  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>{heading}</Heading>
  )
}