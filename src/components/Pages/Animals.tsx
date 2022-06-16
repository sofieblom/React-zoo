import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { StyledImage } from "../StyledComponents/Images";
import {
  SingleAnimalWrapper,
  StyledImageWrapper,
  StyledInfoWrapper,
  StyledWrapper,
} from "../StyledComponents/Wrappers";
import { getAnimals, save } from "../../services/StorageServices";
import { StyledH3, StyledParagraph, SyledLink } from "../StyledComponents/Text";
import Button from "@mui/material/Button";

export const Animals = () => {
  // set state with animals.
  const [animals, setAnimals] = useState<IAnimal[]>(getAnimals());
  const [imageError, setImageError] = useState(false);

  // fetch animal API, set state and save to loaclstorage
  useEffect(() => {
    if (animals.length !== 0) return;

    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
        save(response.data);
      });
  }, []);

  return (
    <StyledWrapper>
      {animals.map((animal) => {
        return (
          <SingleAnimalWrapper key={animal.id}>
            <StyledImageWrapper>
              <StyledImage
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://www.classify24.com/wp-content/uploads/2016/05/no-image.png")
                }
              />
            </StyledImageWrapper>
            <StyledInfoWrapper>
              <StyledH3>{animal.name}</StyledH3>
              <StyledParagraph>{animal.shortDescription}</StyledParagraph>
            </StyledInfoWrapper>

            <SyledLink to={"/animal/" + animal.id}>
              <Button variant="contained" color="success">
                Mer info
              </Button>
            </SyledLink>
          </SingleAnimalWrapper>
        );
      })}
    </StyledWrapper>
  );
};
