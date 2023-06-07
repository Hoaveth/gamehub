import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import GenreCard from "./GenreCard";
import useGenres from "../../hooks/useGenres";

const Sidebar = () => {
  const { genres } = useGenres();
  return (
    <>
      <Text fontSize="2xl" fontWeight={"bold"} margin={"10px 0px"}>
        Genres
      </Text>
      <Flex direction={"column"}>
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </Flex>
    </>
  );
};

export default Sidebar;
