import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
  return (
    <HStack marginBottom={"10px"}>
      <Image
        borderRadius="10px"
        boxSize="50px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text>{genre.name}</Text>
    </HStack>
  );
};

export default GenreCard;
