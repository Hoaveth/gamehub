import GameCard from "./GameCard";
import useGames from "../../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <ul>
      {games.map((game) => {
        return <GameCard game={game} />;
      })}
      {error && <Text>{error}</Text>}
    </ul>
  );
};

export default GameGrid;
