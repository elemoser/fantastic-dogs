import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { Dog } from "../hooks/useDogs";

interface Props {
  dogs: Dog[];
  error: string;
  isLoading: boolean;
}

const DogGroup = ({ dogs, error, isLoading }: Props) => {
  let dogBreedGroup = dogs.map((item) =>
    item.breed_group ? item.breed_group : "Other"
  );
  let dogGroup = [...new Set(dogBreedGroup)];

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {dogGroup.map((group, index) => (
          <ListItem key={index}>{group}</ListItem>
        ))}
      </List>
    </>
  );
};

export default DogGroup;
