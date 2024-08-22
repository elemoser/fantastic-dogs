import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Dog {
  id: number;
  name: string;
}

const DogGrid = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<Dog[]>("/dogs")
      .then((res) => setDogs(res.data))
      .catch((err) => setError(err.message));
  });

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
