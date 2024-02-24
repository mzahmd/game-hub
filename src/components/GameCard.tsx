import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGame";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  console.log(game.metacritic)
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}