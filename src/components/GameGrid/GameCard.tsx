import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Image,
  Divider,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore critic_score={game.metacritic} />
        </Flex>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default GameCard;
