import React, { FC } from "react";
import styled from "styled-components";
import {
  ImgSizes,
  ImgHorizontalPosition,
  ImgVerticalPosition,
} from "../../../enums/ImgDecoration";

interface IImgProps {
  size: ImgSizes;
  verticalPosition: ImgVerticalPosition;
  horizontalPosition: ImgHorizontalPosition;
}
interface IImgDecorationProps extends IImgProps {
  path: string;
  alt?: string;
}

const ImgDecoration: FC<IImgDecorationProps> = ({
  size,
  verticalPosition,
  horizontalPosition,
  path,
  alt,
}) => {
  return (
    <StyledImg
      src={path}
      alt={path ? alt : path}
      size={size}
      verticalPosition={verticalPosition}
      horizontalPosition={horizontalPosition}
      loading="lazy"
    />
  );
};
const StyledImg = styled.img<IImgProps>`
  --size: ${(p) => p.size};
  --horizontal: ${(p) => p.horizontalPosition}%;
  --vertical: ${(p) => p.verticalPosition}%;
  position: absolute;
  top: calc(var(--vertical) - (var(--size) / 2));
  left: calc(var(--horizontal) - (var(--size) / 2));
  height: var(--size);
  width: var(--size);
  opacity: 1;
`;
export default ImgDecoration;
