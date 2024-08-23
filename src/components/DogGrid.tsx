import { SimpleGrid, Text } from "@chakra-ui/react";
import useDogs from "../hooks/useDogs";
import DogCard from "./DogCard";

const DogGrid = () => {
  const { dogs, error } = useDogs();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default DogGrid;
