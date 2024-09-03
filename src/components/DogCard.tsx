import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Dog } from "../hooks/useDogs";
import useDogImage from "../hooks/useDogImage";

interface Props {
  dog: Dog;
}

const DogCard = ({ dog }: Props) => {
  const { dogImage, error } = useDogImage({
    reference_image_id: dog.reference_image_id,
    size: "small",
  });

  return (
    <Card>
      {dogImage.id && <Image src={dogImage.url} />}
      <CardBody>
        <Heading fontSize="2xl">{dog.name}</Heading>
        <Text>{dog.breed_group ? dog.breed_group : "Other"}</Text>
      </CardBody>
    </Card>
  );
};

export default DogCard;
