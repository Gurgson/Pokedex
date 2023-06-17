import { FC } from "react";
import styled from "styled-components";
import { getTypeColor } from "../../constants/PokemonTypeColors";

interface IProps {
  isSmall: boolean;
  type: string;
}
const PokemonType: FC<IProps> = (props) => {
  return (
    <StyledPokemonType data-testid="pokemon-type" isSmall={props.isSmall} type={props.type}>
      {props.type as string}
    </StyledPokemonType>
  );
};
const StyledPokemonType = styled.div<IProps>`
  --bg-color: ${(props) => getTypeColor(props.type)};

  --padding: ${(props) => (props.isSmall ? "0.5rem 1rem" : "2rem 4rem")};
  margin: 1rem 0;
  background-color: var(--bg-color);
  padding: var(--padding);
  
`;
export default PokemonType;
