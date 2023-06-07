import GameCard from "./GameCard";
import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => {
          return <GameCard game={game} />;
        })}
      </SimpleGrid>

      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
