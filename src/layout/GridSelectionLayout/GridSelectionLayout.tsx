import React, { FC } from "react";
import styled from "styled-components";

interface IGridSelectionLayout {
  children?: string;
  gridColumns: number;
}

const GridSelectionLayout: FC<IGridSelectionLayout> = ({
  children,
  gridColumns = 1,
}) => {
  return <StyledLayout>{children}</StyledLayout>;
};
const StyledLayout = styled.section`
  display: grid;
`;
export default GridSelectionLayout;
