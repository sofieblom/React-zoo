import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../../context/AnimalContext";
import { IAnimal } from "../../models/IAnimal";
import { getAnimals, save } from "../../services/StorageServices";
import { StyledImage } from "../StyledComponents/Images";
import { StyledH3, StyledParagraph, SyledLink } from "../StyledComponents/Text";
import {
  StyledBackground,
  StyledByIdAnimalWrapper,
  StyledByIdImageWrapper,
} from "../StyledComponents/Wrappers";
import { FedStatus } from "./FedStatus";

export const ShowAnimal = () => {
  let params = useParams() as { id: string };

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

  // const animalContext = useContext(AnimalContext);

  // get animals from localstorage and compare your id's to display the right one.
  // useEffect(() => {
  //   let animalsFromLS: IAnimal[] = getAnimals();

  //   for (let i = 0; i < animalsFromLS.length; i++) {
  //     if (+params.id === animalsFromLS[i].id) {
  //       setAnimal(animalsFromLS[i]);
  //     }
  //   }
  // }, []);

  // get list from LS, and current Date.
  useEffect(() => {
    let currentDate = new Date().getTime();
    let animalsFromLS: IAnimal[] = getAnimals();
    let hours = Math.floor(10800000);
    console.log("Hours", hours);
    console.log(
      currentDate - new Date(animalsFromLS[1].lastFed).getTime(),
      "current - last"
    );

    //check if it been more than 3 hourse since last fed - update to false
    for (let i = 0; i < animalsFromLS.length; i++) {
      if (+currentDate - new Date(animalsFromLS[i].lastFed).getTime() > hours) {
        animalsFromLS[i].isFed = false;
      }

      // compare id, get right animal and set state.
      if (+params.id === animalsFromLS[i].id) {
        setAnimal(animalsFromLS[i]);
      }
    }

    // save to localstorage
    save(animalsFromLS);
  }, []);

  // if isFed status = false - update to true and update date
  const feedAnimal = (animal: IAnimal) => {
    animal.isFed = true;
    let feedTime = new Date();
    animal.lastFed = feedTime.toLocaleString();
    setAnimal({ ...animal });

    let animalsFromLS: IAnimal[] = getAnimals();

    for (let i = 0; i < animalsFromLS.length; i++) {
      if (animal.id === animalsFromLS[i].id) {
        animalsFromLS[i] = { ...animal };
      }
    }

    save(animalsFromLS);
  };

  return (
    <StyledBackground>
      <StyledByIdAnimalWrapper>
        <StyledByIdImageWrapper>
          <StyledImage
            src={animal.imageUrl}
            alt={animal.name}
            onError={(e) =>
              (e.currentTarget.src =
                "https://www.classify24.com/wp-content/uploads/2016/05/no-image.png")
            }
          />
        </StyledByIdImageWrapper>
        <StyledH3>{animal.name}</StyledH3>
        <StyledParagraph>Född: {animal.yearOfBirth}</StyledParagraph>
        <StyledParagraph>{animal.longDescription}</StyledParagraph>
        <FedStatus animal={animal} feedAnimal={feedAnimal} />
      </StyledByIdAnimalWrapper>
    </StyledBackground>
  );
};
