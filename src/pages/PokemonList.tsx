import { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { flexCenter } from "../styles/mixins";
import PokemonListItem from "../components/Pokemon/PokemonListItem";
import PaginationItem from "../components/Pagination/PaginationItem";
import { PokemonDetails, PokemonListData } from "../interfaces/Pokemon";
import UseFetchPokemons from "../hooks/UseFetchPokemonList";

const PokemonsList = () => {
  //data
  const [offset, setOffset] = useState<number>(0);
  const [limitElementsPerPage, setLimit] = useState<number>(20);
  const [pokemon, setPokemon] = useState<PokemonListData[]>([]);

  //rendering pagination buttons
  const paginationItems = [5, 10, 20, 50, 10000].map((limit, index) => {
    return (
      <PaginationItem
        key={index}
        limit={limit}
        handleClick={setLimit}
        alias={limit === 10000 ? "All" : ""}
      />
    );
  });

  //fetching pokemon list and loading pokemon
  const { pokemonList, isLoading, err } = UseFetchPokemons({
    limit: limitElementsPerPage,
    offset: offset,
  });
  useEffect(() => {
    if (pokemonList.length > 0 && !isLoading)
      setPokemon((pokemon) => [...pokemon, ...pokemonList]);
  }, [pokemonList]);

  // const observer = useRef();
  // const lastPokemonElement = useCallback((lastPokemon) =>{
  //   console.log(lastPokemon);
  // });
  //rendering component
  if (isLoading && pokemon.length === 0) return <p>Pokemon loading</p>;
  return (
    <Wrapper>
      <DataContainer>
        <TopPanel>
          <PaginationContainer>
            <p>How many pokemons you wish to load: </p>

            {paginationItems}
          </PaginationContainer>
        </TopPanel>

        <PokemonList>
          {pokemon.map((item, index) => (
            <PokemonListItem name={item.name} key={item.name} />
          ))}
        </PokemonList>
        <StyledButton
          onClick={() => {
            setOffset(pokemon.length || 20);
          }}
        >
          {isLoading ? "Fetching..." : "load more"}
        </StyledButton>
      </DataContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${flexCenter};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1082%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient1083)'%3e%3c/rect%3e%3cpath d='M1920 0L1342.53 0L1920 422.72z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1342.53 0L1920 422.72L1920 584.4000000000001L1082.87 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1082.87 0L1920 584.4000000000001L1920 684.3400000000001L776.8499999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M776.8499999999999 0L1920 684.3400000000001L1920 765.0200000000002L734.5899999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1080L245.39 1080L0 1033.94z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1033.94L245.39 1080L625.0699999999999 1080L0 868.96z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 868.96L625.0699999999999 1080L1018.3599999999999 1080L0 539.52z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 539.52L1018.3599999999999 1080L1615.21 1080L0 187.43z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1082'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1083'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(20%2c 75%2c 146%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  height: 100vh;
  width: 100vw;
`;
const DataContainer = styled.div`
  border: 3px solid white;
  border-radius: 4rem;
  height: 80%;
  width: 80%;
  position: relative;
  overflow-y: auto;
  scrollbar-width: auto;
  scrollbar-color: #2a1f7a transparent;
  z-index: 1;
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a1f7a;
    border-radius: 10px;
    border: 3px solid white;
  }
`;
const TopPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding: 2rem;
  &::after {
    content: "";
    width: 90%;
    height: 0.2rem;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 5%;
  }
`;
const PokemonList = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const PaginationContainer = styled.div`
  ${flexCenter}
  text-align: center;
  flex-wrap: wrap;
  & > p {
    flex: 100%;
  }
`;
const StyledButton = styled.button`
  font-size: 1.2em;
  display: block;
  margin: 1rem auto;
  width: 200px;
  height: 70px;
  background: #06c1de;
  border: 0px;
  text-transform: uppercase;
  position: relative;
  box-shadow: inset -4px 2px 1px 1px grey, inset -4px -2px 1px 1px lightgray,
    inset 4px 0px 1px 1px lightgray;

  &:hover {
    cursor: pointer;
    background-color: #06b6d1;
  }
  &::after {
    content: " ";
    background-color: black;
    position: absolute;
    z-index: -1;
    left: -2.5%;
    top: 0;
    width: 105%;
    height: 100%;
  }

  &::before {
    content: " ";
    background: black;
    position: absolute;
    z-index: -1;
    left: 0;
    top: -5%;
    width: 100%;
    height: 110%;
  }
`;

export default PokemonsList;
