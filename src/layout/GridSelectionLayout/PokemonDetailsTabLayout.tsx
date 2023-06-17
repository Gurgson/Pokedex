import React, { FC } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

interface IProps {
  colors: string[];
  children: React.ReactNode;
  degree?: number;
}

const PokemonDetailsTabLayout: FC<IProps> = ({ colors, children, degree }) => {
  return (
    <StyledWrapper colors={colors} degree={degree ? degree : 45}>
      {children}
    </StyledWrapper>
  );
};
const StyledWrapper = styled.article<IProps>`
  border: 4px solid lightgrey;
  border-radius: 2rem;
  padding: 2rem;
  margin: auto;
  min-width: 45%;

  ${(p) => {
    return p.colors.length === 2
      ? `background: linear-gradient(${p.degree}deg, ${p.colors[0]}, ${p.colors[1]});`
      : `background: ${p.colors[0]};`;
  }}
`;
export default PokemonDetailsTabLayout;
