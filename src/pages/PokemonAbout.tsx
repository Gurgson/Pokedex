import React, { FC } from "react";
import { useParams } from "react-router-dom";

interface IParams {
  query: string;
}
const PokemonAbout: FC = () => {
  const { query } = useParams();
  return <div>{query}</div>;
};

export default PokemonAbout;
