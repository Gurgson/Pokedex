import React, { FC } from "react";
import styled from "styled-components";
import LandingOption from "../components/LandingOption/LandingOption";
import evee from "./../assets/evee.png";
import pikachu from "./../assets/pikachu.png";
import { flexCenter } from "../styles/mixins";
import ImgDecoration from "./../components/Decorations/ImgDecoration/ImgDecoration";
import {
  ImgSizes,
  ImgHorizontalPosition,
  ImgVerticalPosition,
} from "../enums/ImgDecoration";

const Landing: FC = () => {
  return (
    <Wrapper>
      <LandingOption
        to="pokemon"
        wrapper={{
          bgColor: "#804000",
        }}
        description="Pokemons"
      >
        <ImgDecoration
          size={ImgSizes.medium}
          verticalPosition={ImgVerticalPosition.top}
          horizontalPosition={ImgHorizontalPosition.rigth}
          path={evee}
        />
        <ImgDecoration
          size={ImgSizes.big}
          verticalPosition={ImgVerticalPosition.center}
          horizontalPosition={ImgHorizontalPosition.left}
          path={pikachu}
        />
      </LandingOption>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  background-image: url("forest-bg.jpg");
  background-position: center;
  ${flexCenter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  padding: 15rem 0;
`;
export default Landing;
