import React, { useEffect, useState } from "react";
import { PokemonDetails, PokemonListData } from "../interfaces/Pokemon";

interface IParams {
  limit?: number;
  offset: number;
}

const UseFetchPokemons = (params: IParams) => {
  const limit = params.limit || 20;
  const offset = params.offset;
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const [pokemonList, setPokemonList] = useState<PokemonListData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      setIsLoading(true);
      setError(null);
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          setPokemonList(data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    };
    fetchPokemonList();
  }, [offset]);
  return { pokemonList, isLoading, err };
};

export default UseFetchPokemons;
