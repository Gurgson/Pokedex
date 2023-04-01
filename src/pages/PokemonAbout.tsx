import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImgDecoration from "../components/Decorations/ImgDecoration/ImgDecoration";
import {
  ImgHorizontalPosition,
  ImgSizes,
  ImgVerticalPosition,
} from "../enums/ImgDecoration";

import UseFetchPokemonDetails from "../hooks/UseFetchPokemonDetails";
import { PokemonDetails } from "../interfaces/Pokemon";
import PokemonDetailsTabLayout from "../layout/GridSelectionLayout/PokemonDetailsTabLayout";

const PokemonAbout: FC = () => {
  const { query } = useParams();

  if (!query) return <>pokemon missing</>;
  const { pokemonDetails, isLoading, err } = UseFetchPokemonDetails({ query });
  if (isLoading) return <>Pokemon loading</>;
  if (err) return <>{err?.message}</>;

  return (
    <SectionLayout>
      <PokemonView colors={["test", null]}>
        <img src={pokemonDetails?.sprites.front_default} />
      </PokemonView>
    </SectionLayout>
  );
};
const SectionLayout = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const PokemonView = styled(PokemonDetailsTabLayout)`
  width: 40%;
  height: 40%;
`;
export default PokemonAbout;
