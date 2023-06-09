import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";
interface props {
  handleClick: (number: number) => void;
  limit: number;
  alias?: string;
}
const PaginationItem: FC<props> = (props) => {
  return (
    <StyledButton onClick={() => props.handleClick(props.limit)}>
      {props.alias || props.limit}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: lightblue;
  margin: 0 1px;
  cursor: pointer;
  border: 3px solid black;
  &:focus-within {
    background-color: red;
  }
`;
export default PaginationItem;
