import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery
}

export default function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGame(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7]

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={"10px"} spacing={6}>
      {isLoading && skeletons.map(skeleton =>
        <GameCardContainer key={skeleton} >
          <GameCardSkeleton />
        </GameCardContainer>
      )}
      {games.map(game => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}