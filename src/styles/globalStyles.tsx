import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    
    ${reset}
    ${variables}
    html {
        
        @font-face {
        font-family: 'PressStart2P';
        src: url('/fonts/PressStart2P-Regular.ttf') format('truetype');
        }
        font-size: 62.5%;
        @media only screen and (max-width: 93.75em){
            font-size: 50%;
        }
    }
    body {
        font-family: 'PressStart2P';
        background-color: white;
        font-size: var(--fs-paragraph);
    }
`;

export default GlobalStyles;
