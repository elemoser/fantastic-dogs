import { SimpleGrid, Text } from "@chakra-ui/react";
import useDogs from "../hooks/useDogs";
import DogCard from "./DogCard";
import DogCardSkeleton from "./DogCardSkeleton";
import DogCardContainer from "./DogCardContainer";

const DogGrid = () => {
  const { dogs, error, isLoading } = useDogs();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <DogCardContainer>
              <DogCardSkeleton key={skeleton} />
            </DogCardContainer>
          ))}
        {dogs.map((dog) => (
          <DogCardContainer>
            <DogCard key={dog.id} dog={dog} />
          </DogCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default DogGrid;
