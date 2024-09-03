import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface DogImage {
    id: string;
    url: string;
}

interface Props {
  reference_image_id: string,
  size: string
}

const useDogImage = ({reference_image_id, size}: Props) => {
    const [dogImage, setDogImage] = useState<DogImage>({id: "", url: ""});
    const [error, setError] = useState("");
  
    useEffect(() => {
      const controller = new AbortController();

      apiClients
        .get<DogImage>("/images/" + reference_image_id + "?size=" + size, {signal: controller.signal})
        .then((res) => {
          setDogImage(res.data);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
        });

      return () => controller.abort();
    }, []);

    return {dogImage, error};
}

export default useDogImage;