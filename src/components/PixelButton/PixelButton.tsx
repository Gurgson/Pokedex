import React, { FC } from "react";
import styled from "styled-components";

interface IPixelButton {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler;
}

const PixelButton: FC<IPixelButton> = ({ handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};
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

export default PixelButton;
