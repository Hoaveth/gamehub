import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import GameCard from "./GameCard";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      {games.map((game) => {
        return <GameCard game={game} />;
      })}
    </ul>
  );
};

export default GameGrid;
