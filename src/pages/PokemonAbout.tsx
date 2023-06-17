import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getTypeColor } from "../constants/PokemonTypeColors";

import UseFetchPokemonDetails from "../hooks/UseFetchPokemonDetails";

import PokemonDetailsTabLayout from "../layout/GridSelectionLayout/PokemonDetailsTabLayout";
import { flexCenter } from "../styles/mixins";

const PokemonAbout: FC = () => {
  const { query } = useParams();

  if (!query) return <>pokemon missing</>;
  const { pokemonDetails, isLoading, err } = UseFetchPokemonDetails({ query });
  if (isLoading) return <>Pokemon loading</>;
  if (err) return <>{err?.message}</>;
  if (!pokemonDetails) return <>pokemon missing</>;
  //bgColors;
  const bgPokemonViewColor = [getTypeColor(pokemonDetails.types[0].type.name)];
  if (pokemonDetails.types[1]?.type.name) {
    bgPokemonViewColor.push(getTypeColor(pokemonDetails.types[1].type.name));
  }
  console.log(pokemonDetails);
  return (
    <SectionLayout>
      <PokemonView colors={bgPokemonViewColor}>
        <PokemonFrontPhoto
          src={pokemonDetails.sprites.other["official-artwork"].front_default}
        />
        <PokemonName>{pokemonDetails.name}</PokemonName>
      </PokemonView>
      <PokemonStats colors={["#fefefe"]}>
        {pokemonDetails.stats.map((item, index) => {
          const Tiles = 15;
          let coloredTiles = Math.round(item.base_stat / Tiles);
          item.stat.name = item.stat.name.replace("-", " ");
          const li = [];
          for (let i = 0; i < Tiles; i++) {
            if (coloredTiles > 0) {
              li.push(<li className="colored" key={i}></li>);
              coloredTiles--;
            } else {
              li.push(<li key={i}></li>);
            }
          }
          return (
            <StyledStatCotainer key={item.stat.name}>
              <p>{item.stat.name}</p>
              <ul>{li}</ul>
            </StyledStatCotainer>
          );
        })}
      </PokemonStats>
    </SectionLayout>
  );
};
const SectionLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1082%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient1083)'%3e%3c/rect%3e%3cpath d='M1920 0L1342.53 0L1920 422.72z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1342.53 0L1920 422.72L1920 584.4000000000001L1082.87 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1082.87 0L1920 584.4000000000001L1920 684.3400000000001L776.8499999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M776.8499999999999 0L1920 684.3400000000001L1920 765.0200000000002L734.5899999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1080L245.39 1080L0 1033.94z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1033.94L245.39 1080L625.0699999999999 1080L0 868.96z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 868.96L625.0699999999999 1080L1018.3599999999999 1080L0 539.52z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 539.52L1018.3599999999999 1080L1615.21 1080L0 187.43z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1082'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1083'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(20%2c 75%2c 146%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  height: 100vh;
  width: 100vw;
`;
const PokemonView = styled(PokemonDetailsTabLayout)`
  ${flexCenter};
  flex-direction: column;
`;
const PokemonFrontPhoto = styled.img`
  height: 40rem;
  width: 45rem;
`;
const PokemonName = styled.span`
  font-size: var(--fs-title);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
const PokemonStats = styled(PokemonDetailsTabLayout)`
  display: flex;
`;
const StyledStatCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    text-transform: uppercase;
  }
  & > ul {
    list-style: none;
    ${flexCenter}
  }
  & > ul li {
    width: 2rem;
    height: 5px;
    background-color: grey;
    border: 1px solid black;
    border-radius: 1px;
    margin: 1px;

    &.colored {
      background-color: black;
    }
  }
`;
export default PokemonAbout;
