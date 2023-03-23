import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface ISwitchProps {
  buttons: ReactNode[];
}

const Switch: FC<ISwitchProps> = () => {
  return (
    <StyledSwitch>
      <div></div>
    </StyledSwitch>
  );
};
const StyledSwitch = styled.button`
  position: relative;
`;
export default Switch;
