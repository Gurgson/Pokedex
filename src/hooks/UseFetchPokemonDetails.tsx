import React, { useContext, useEffect, useState } from "react";
import { AppDataContext } from "../App";
import { PokemonDetails, PokemonListData } from "../interfaces/Pokemon";

interface IParams {
  query: string;
}

const UseFetchPokemonDetails = (params: IParams) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${params.query.toLowerCase()}`;
  const pokemonContext = useContext(AppDataContext).pokemon;
  const [pokemonDetails, setDetails] = useState<PokemonDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchPokemonList = async () => {
      setIsLoading(true);
      setError(null);
      fetch(endpoint)
        .then((response) => response.json())
        .then((data: PokemonDetails) => {
          pokemonContext.set(data.name, data);
          setDetails(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    };
    const pokemon = pokemonContext.get(params.query);
    if (pokemon) {
      setDetails(pokemon);
    } else {
      fetchPokemonList();
    }
    setIsLoading(false);
  }, []);
  return { pokemonDetails, isLoading, err };
};

export default UseFetchPokemonDetails;
