import { SimpleGrid, Text } from "@chakra-ui/react";
import useDogs, { Dog } from "../hooks/useDogs";
import DogCard from "./DogCard";
import DogCardSkeleton from "./DogCardSkeleton";
import DogCardContainer from "./DogCardContainer";

interface Props {
  dogs: Dog[];
  error: string;
  isLoading: boolean;
}

const DogGrid = ({ dogs, error, isLoading }: Props) => {
  //   const { dogs, error, isLoading } = useDogs();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <DogCardContainer key={skeleton}>
              <DogCardSkeleton key={skeleton} />
            </DogCardContainer>
          ))}
        {dogs.map((dog) => (
          <DogCardContainer key={dog.id}>
            <DogCard key={dog.id} dog={dog} />
          </DogCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default DogGrid;
