import styled from "styled-components";

export const StyledBackgroundLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to right, #f1d46d, #d44444f0);
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 1025px) {
    width: 900px;
    margin: auto;
  }
`;

export const SingleAnimalWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  margin: 20px 0px;
  gap: 10px;
  background-color: #f9f9f935;
  @media screen and (min-width: 481px) {
    width: 240px;
  }
  @media screen and (min-width: 1025px) {
    width: 220px;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 200px;
  height: 120px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`;

export const StyledByIdImageWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

export const StyledInfoWrapper = styled.div`
  width: 200px;
`;

export const StyledByIdAnimalWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f935;
  margin: 20px 0px;
  @media screen and (min-width: 1025px) {
    width: 900px;
    margin: auto;
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledBackArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
