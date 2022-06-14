import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledH3 = styled.h3`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: #252525;
  width: 100%;
  font-size: 2rem;
  margin: 0px;
`;

export const StyledParagraph = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.85rem;
  color: #252525;
  padding: 15px;
  margin: 0px 15px;
`;

export const SyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 2px;
`;
