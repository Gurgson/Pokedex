import React, { FC } from "react";
import styled from "styled-components";
import { PokemonTypeColor } from "../../enums/PokemonTypes";

interface IProps {
  isSmall: boolean;
  type: string;
}

const PokemonTypes: FC<IProps> = (props) => {
  return (
    <StyledPokemonType isSmall={props.isSmall} type={props.type}>
      {props.type}
    </StyledPokemonType>
  );
};
const StyledPokemonType = styled.div<IProps>`
  --bg-color: ${(props) =>
    PokemonTypeColor[props.type as keyof typeof PokemonTypeColor]};
  --padding: ${(props) => (props.isSmall ? "0.5rem 1rem" : "2rem 4rem")};
  margin: 1rem 0;
  background-color: var(--bg-color);
  padding: var(--padding);
`;
export default PokemonTypes;
