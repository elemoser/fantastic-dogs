import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Dog } from "../hooks/useDogs";

interface Props {
  dog: Dog;
}

const DogCard = ({ dog }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={dog.image} />
      <CardBody>
        <Heading fontSize="2xl">{dog.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default DogCard;
