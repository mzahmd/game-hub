import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

export default function GameGrid() {
  const { data: games, error, isLoading } = useGame()
  const skeletons = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={3}>
        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer key={skeleton} >
            <GameCardSkeleton/>
          </GameCardContainer>
        )}
        {games.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}