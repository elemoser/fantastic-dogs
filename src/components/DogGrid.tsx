import { Text } from "@chakra-ui/react";
import useDogs from "../hooks/useDogs";

const DogGrid = () => {
  const { dogs, error } = useDogs();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DogGrid;
