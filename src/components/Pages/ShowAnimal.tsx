import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExtendAnimal } from "../../models/IAnimal";

export const ShowAnimal = () => {
  let params = useParams();

  const [animal, setAnimal] = useState<IExtendAnimal>({
    name: "",
    shortDescription: "string",
    imageUrl: "string",
    isFed: false,
    lastFed: "",
    longDescription: "string",
  });

  useEffect(() => {
    axios
      .get<IExtendAnimal>(
        `https://animals.azurewebsites.net/api/animals/${params.id}`
      )
      .then((response) => {
        setAnimal(response.data);
      });
    console.log(animal);
  }, []);

  return <>ShowAnimal works</>;
};
