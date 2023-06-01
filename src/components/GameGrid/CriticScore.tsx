import { Badge } from "@chakra-ui/react";

interface Props {
  critic_score: number;
}

const CriticScore = ({ critic_score }: Props) => {
  let color = critic_score > 75 ? "green" : critic_score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      padding={"10px"}
      borderRadius={"4px"}
      fontSize={"14px"}
    >
      {critic_score}
    </Badge>
  );
};

export default CriticScore;
