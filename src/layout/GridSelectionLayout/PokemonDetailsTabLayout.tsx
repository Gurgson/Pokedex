import React, { FC } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

interface IProps {
  colors: [string, string | null];
  children: React.ReactNode;
}

const PokemonDetailsTabLayout: FC<IProps> = ({ colors, children }) => {
  return <StyledWrapper colors={colors}>{children}</StyledWrapper>;
};
const StyledWrapper = styled.section<IProps>`
  border: 1px solid black;
  border-radius: 2rem;
  padding: 2rem;
  ${flexCenter}
`;
export default PokemonDetailsTabLayout;
