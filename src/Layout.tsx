import { Outlet } from "react-router-dom";
import { Animals } from "./components/Pages/Animals";
import { StyledH1 } from "./components/StyledComponents/Text";
import { StyledBackgroundLayout } from "./components/StyledComponents/Wrappers";

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
