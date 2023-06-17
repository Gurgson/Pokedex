import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

type WrapperItems = {
  bgColor: string;
};

interface ILandingPageItem {
  wrapper: WrapperItems;
  description: string;
  to: string;
  children?: React.ReactNode;
}
interface IWrapper {
  bgColor?: string;
  backgroundImg?: string;
}

const LandingOption: FC<ILandingPageItem> = ({
  wrapper,
  description,
  to,
  children,
}) => {
  return (
    <StyledLink to={to} data-testid="landing-option-wrapper">
      <Wrapper bgColor={wrapper.bgColor} data-testid="landing-option-children">
        {description}
        {children}
      </Wrapper>
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  height: 30vh;
  ${flexCenter}
`;
const Wrapper = styled.div<IWrapper>`
  --bg-color: ${(props) => props.bgColor + "D9"};

  height: 100%;
  width: 50vw;
  background-image: url("animated_shapes_bg.svg");
  background-color: var(--bg-color);
  color: #fefefe;
  font-weight: 600;
  border-radius: 2rem;
  font-size: var(--fs-heading);
  letter-spacing: 20px;
  text-transform: uppercase;
  position: relative;
  box-sizing: content-box;

  ${flexCenter}
  &:hover {
    transition: 0.7s;
    border: 3px solid black;
  }
`;
export default LandingOption;
