import React, { FC, useContext, useEffect, useState } from "react";
import { PokemonDetails } from "./../../interfaces/Pokemon";
import styled from "styled-components";
import ImgDecoration from "../Decorations/ImgDecoration/ImgDecoration";
import imgNotFound from "./../../assets/bluredPig.png";
import {
  ImgSizes,
  ImgHorizontalPosition,
  ImgVerticalPosition,
} from "../../enums/ImgDecoration";
import PokemonType from "./PokemonType";
import { AppDataContext } from "../../App";
import { Link } from "react-router-dom";
import UseFetchPokemonDetails from "../../hooks/UseFetchPokemonDetails";

enum layoutOption {
  square,
  row,
}
interface ILayout {}
interface IProps {
  name: string;
  layout?: layoutOption;
}
const PokemonListItem: FC<IProps> = ({ name }) => {
  ///data
  const { pokemonDetails, isLoading, err } = UseFetchPokemonDetails({
    query: name,
  });

  //checking errors
  if (!pokemonDetails) return <>Error </>;
  if (err) {
    return <>{err} </>;
  }

  if (isLoading) {
    return <div>Loading your pokemon</div>;
  }

  return (
    <StyledListElement to={pokemonDetails.name}>
      <ImgDecoration
        size={ImgSizes.small}
        horizontalPosition={ImgHorizontalPosition.left}
        verticalPosition={ImgVerticalPosition.center}
        path={pokemonDetails.sprites.front_default || imgNotFound}
      />
      <p>#{pokemonDetails.id}</p>
      <p>{pokemonDetails.name}</p>
      <PokemonTypesContainer>
        <PokemonType type={pokemonDetails.types[0].type.name} isSmall={true} />
        {pokemonDetails.types[1] ? (
          <PokemonType
            type={pokemonDetails.types[1].type.name}
            isSmall={true}
          />
        ) : (
          ""
        )}
      </PokemonTypesContainer>
    </StyledListElement>
  );
};
const StyledListElement = styled(Link)`
  width: 80%;
  height: 5rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: lightblue;
  margin: 5rem auto;
  padding: 0 5rem;
  border: 1px solid white;
  text-transform: uppercase;
  cursor: pointer;
  & > p {
    margin: 0 1rem;
  }
  &:hover {
    border: 5px solid red;
  }
`;
const PokemonTypesContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
`;

export default React.memo(PokemonListItem);
