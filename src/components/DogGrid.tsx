import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface FetchDogsBreedsResponse {
  status: string;
  message: string[];
}

const DogGrid = () => {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<FetchDogsBreedsResponse>("list")
      .then((res) => setDogBreeds(res.data.message))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {dogBreeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </>
  );
};

export default DogGrid;
