import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { StyledImage } from "../StyledComponents/Images";
import {
  SingleAnimalWrapper,
  StyledImageWrapper,
  StyledWrapper,
} from "../StyledComponents/Wrappers";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;

    axios
      .get("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
      });
  }, []);

  console.log(animals);
  const test = () => {
    console.log("arrow funkar");
  };

  return (
    <StyledWrapper>
      {animals.map((animal) => {
        return (
          <SingleAnimalWrapper key={animal.id}>
            <StyledImageWrapper>
              <StyledImage src={animal.imageUrl} alt={animal.name} />
            </StyledImageWrapper>
            <h3>{animal.name}</h3>
            <p>{animal.shortDescription}</p>
            <Link to={"/animal/" + animal.id}>
              <KeyboardDoubleArrowRightIcon
                onClick={test}
              ></KeyboardDoubleArrowRightIcon>
            </Link>
          </SingleAnimalWrapper>
        );
      })}
    </StyledWrapper>
  );
};
