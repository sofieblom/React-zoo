import { Outlet } from "react-router-dom";
import { Animals } from "./Pages/Animals";
import { StyledH1 } from "./StyledComponents/Text";
import { StyledBackgroundLayout } from "./StyledComponents/Wrappers";

export const Layout = () => {
  return (
    <>
      <StyledBackgroundLayout>
        <StyledH1>HELP ME OUT TOO FEED MY ANIMALS</StyledH1>
        <Outlet></Outlet>
      </StyledBackgroundLayout>
    </>
  );
};
