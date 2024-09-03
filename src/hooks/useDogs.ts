import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Dog {
    id: number;
    name: string;
    breed_group: string;
    reference_image_id: string;
  }

const useDogs = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
    
      setLoading(true);
      apiClients
        .get<Dog[]>("/breeds", {signal: controller.signal})
        .then((res) => {
            setDogs(res.data);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

      return () => controller.abort();
    }, []);

    return {dogs, error, isLoading};
}

export default useDogs;