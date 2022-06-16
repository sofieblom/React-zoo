import { Button } from "@mui/material";
import { StyledH1, StyledH3, SyledLink } from "./StyledComponents/Text";
import { StyledBackgroundLayout } from "./StyledComponents/Wrappers";

export const NotFound = () => {
  return (
    <>
      <StyledBackgroundLayout>
        <StyledH1>Sidan du försöker nå finns inte!</StyledH1>
        <SyledLink to={"/"}>
          <Button variant="contained" color="success">
            Till startsidan
          </Button>
        </SyledLink>
      </StyledBackgroundLayout>
    </>
  );
};
