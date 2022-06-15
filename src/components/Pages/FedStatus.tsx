import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import { IAnimal } from "../../models/IAnimal";
import Button from "@mui/material/Button";
import {
  StyledBackArrowWrapper,
  StyledButtonWrapper,
} from "../StyledComponents/Wrappers";
import { SyledLink } from "../StyledComponents/Text";
import { ArrowBack } from "@mui/icons-material";

interface IFedStatusProps {
  animal: IAnimal;
  feedAnimal(animal: IAnimal): void;
}

export const FedStatus = (props: IFedStatusProps) => {
  const changeFedStatus = (singleAnimal: IAnimal) => {
    props.feedAnimal(singleAnimal);
  };

  return (
    <>
      <StyledButtonWrapper>
        <b>senast matad:</b> <i>{props.animal.lastFed}</i>
        <br />
        {props.animal.isFed ? (
          <Button variant="contained" color="success" disabled>
            {props.animal.name} har fått mat
          </Button>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              changeFedStatus(props.animal);
            }}
          >
            Mata {props.animal.name}
          </Button>
        )}
        <StyledBackArrowWrapper>
          <SyledLink to={"/"}>
            <ArrowBack fontSize="large">back</ArrowBack>
          </SyledLink>
        </StyledBackArrowWrapper>
      </StyledButtonWrapper>
    </>
  );
};
