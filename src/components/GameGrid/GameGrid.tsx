import GameCard from "./GameCard";
import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => {
          return <GameCard game={game} />;
        })}
      </SimpleGrid>

      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
