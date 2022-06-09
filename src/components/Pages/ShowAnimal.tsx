import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { StyledImage } from "../StyledComponents/Images";
import {
  StyledByIdAnimalWrapper,
  StyledByIdImageWrapper,
} from "../StyledComponents/Wrappers";

export const ShowAnimal = () => {
  let params = useParams();

  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    imageUrl: "",
    isFed: false,
    lastFed: "",
    shortDescription: "",
    longDescription: "",
    yearOfBirth: 0,
  });

  useEffect(() => {
    axios
      .get<IAnimal>(
        `https://animals.azurewebsites.net/api/animals/${params.id}`
      )
      .then((response) => {
        setAnimal(response.data);
      });
  }, []);
  console.log(animal);

  return (
    <StyledByIdAnimalWrapper>
      <StyledByIdImageWrapper>
        <StyledImage src={animal.imageUrl} alt={animal.name} />
      </StyledByIdImageWrapper>
      <h2>{animal.name}</h2>
      <p>Född: {animal.yearOfBirth}</p>
      <span>{animal.longDescription}</span>
    </StyledByIdAnimalWrapper>
  );
};
