import React, { FC } from "react";
import styled from "styled-components";

interface ISwitchProps {
  leftIcon: React.ReactNode | string;
  rightIcon: React.ReactNode | string;
  onClick: React.MouseEventHandler;
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
