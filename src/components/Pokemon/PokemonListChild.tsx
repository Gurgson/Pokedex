import { FC } from "react";
import styled from "styled-components";
import UseFetchPokemonDetails from "../../hooks/UseFetchPokemonDetails";
import { listLayooutOptions } from "../../enums/listLayoutOptions";
import ImgDecoration from "../Decorations/ImgDecoration/ImgDecoration";
import { ImgHorizontalPosition, ImgSizes, ImgVerticalPosition } from "../../enums/ImgDecoration";
import { flexCenter } from "../../styles/mixins";
import PokemonType from "./PokemonType";


interface IProps {
  name: string;
  layout: listLayooutOptions;
}
const PokemonListChild: FC<IProps> = ({ name, layout }) => {
  ///data
  const { pokemonDetails, isLoading, err } = UseFetchPokemonDetails({
    query: name,
  });

  return (
    <>
      {isLoading && <>Loading</>} 
      {err && <> Couldn't load pokemon{console.log(err.message)}</>}
      {!pokemonDetails && <> Loading pokemon </>}
      {pokemonDetails && layout === listLayooutOptions.row && 
      <StyledRowListChild>
          
          <ImgDecoration  path={pokemonDetails?.sprites.front_default || "/assets/bluredPig.png"} verticalPosition={ImgVerticalPosition.center} horizontalPosition={ImgHorizontalPosition.left} size={ImgSizes.small}/>
          <span>
          {
            pokemonDetails?.id 
          }
          </span>
          <span>
            {
              pokemonDetails?.name || "Not Found"
            }
          </span>
          <PokemonTypesContainer>
          {(pokemonDetails.types[0])?< PokemonType isSmall={false} type={pokemonDetails?.types[0].type.name}/>:""}
            {(pokemonDetails.types[1])?< PokemonType isSmall={false} type={pokemonDetails?.types[1].type.name}/>:""}
          </PokemonTypesContainer>
      </StyledRowListChild>}
      {pokemonDetails && layout === listLayooutOptions.square && <StyledSquareListChild>
        <img src={pokemonDetails?.sprites.front_default || "/assets/bluredPig.png"}/>
        <StyledFirstSection>
          <span>
            #{pokemonDetails?.id}
          </span>
          <span>
            {pokemonDetails?.name}
          </span>
        </StyledFirstSection>
        <PokemonTypesContainer>
          {(pokemonDetails.types[0])?< PokemonType isSmall={false} type={pokemonDetails?.types[0].type.name}/>:""}
            {(pokemonDetails.types[1])?< PokemonType isSmall={false} type={pokemonDetails?.types[1].type.name}/>:""}
        </PokemonTypesContainer>
        </StyledSquareListChild>}
      
    </>
  );
};
const StyledRowListChild = styled.div`
  width:  70%;
  padding: 20px 40px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  
`;
const StyledSquareListChild = styled.div`
   flex: 33%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   & > img{
    width: 50%;
  
   }
  
`;
const PokemonTypesContainer = styled.div`
  display: flex;
`;
const StyledFirstSection = styled.div`
display: flex;
justify-content: space-evenly;
flex: 1;
`
;
export default PokemonListChild;
