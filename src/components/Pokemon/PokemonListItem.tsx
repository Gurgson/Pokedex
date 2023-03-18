import React, { FC, useContext, useEffect, useState } from "react";
import { Pokemon } from "./../../interfaces/Pokemon";
import styled from "styled-components";
import ImgDecoration from "../Decorations/ImgDecoration/ImgDecoration";
import {
  ImgSizes,
  ImgHorizontalPosition,
  ImgVerticalPosition,
} from "../../enums/ImgDecoration";
import PokemonType from "./PokemonType";
import { AppDataContext } from "../../App";

enum layoutOption {
  square,
  row,
}
interface ILayout {}
interface props {
  name: string;
  layout?: layoutOption;
}
const PokemonListItem: FC<props> = (props) => {
  const [pokemonDetails, setPokemon] = useState<Pokemon | null>(null);
  const { pokemon } = useContext(AppDataContext);
  console.log(pokemon);
  console.log(pokemonDetails);
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      );
      const data: Pokemon = await response.json();

      setPokemon(data);
      pokemon[data.id] = data;
    }

    fetchPokemon();
  }, [props.name]);
  if (!pokemonDetails) {
    return <div>error();</div>;
  }
  debugger;
  return (
    <StyledListElement>
      <ImgDecoration
        size={ImgSizes.small}
        horizontalPosition={ImgHorizontalPosition.left}
        verticalPosition={ImgVerticalPosition.center}
        path={pokemonDetails.sprites.front_default}
      />
      <p>{pokemonDetails.name}</p>
      <PokemonTypes>
        <PokemonType type={pokemonDetails.types[0].type.name} isSmall={true} />
        {pokemonDetails.types[1] ? (
          <PokemonType
            type={pokemonDetails.types[1].type.name}
            isSmall={true}
          />
        ) : (
          ""
        )}
      </PokemonTypes>
    </StyledListElement>
  );
};
const StyledListElement = styled.div`
  width: 80%;
  height: 5rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: lightblue;
  margin: 5rem auto;
  border: 1px solid white;
  text-transform: uppercase;
`;
const PokemonTypes = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
`;

export default PokemonListItem;
