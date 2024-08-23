import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Dog {
    id: number;
    name: string;
  }

const useDogs = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const controller = new AbortController();

      apiClients
        .get<Dog[]>("/dogs", {signal: controller.signal})
        .then((res) => setDogs(res.data))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
        });

      return () => controller.abort();
    }, []);

    return {dogs, error};
}

export default useDogs;