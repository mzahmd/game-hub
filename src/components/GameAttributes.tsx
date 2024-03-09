import { SimpleGrid, Text } from "@chakra-ui/react"
import Game from "../entities/Game"
import DefinitionItem from "./DefinitionItem"
import CriticScore from "./CriticScore"

interface Props {
  game: Game
}

export default function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
      </DefinitionItem>
    </SimpleGrid>
  )
}