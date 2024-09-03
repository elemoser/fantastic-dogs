import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
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
    <Card borderRadius={10} overflow="hidden">
      {dogImage.id && <Image src={dogImage.url} />}
      <CardBody>
        <Heading fontSize="2xl">{dog.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default DogCard;
