import { createGlobalStyle } from "styled-components";
import appBackground from "./assets/appBackground.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Nunito", sans-serif;
        margin: 0 auto;
        max-width: 1500px;
        background-image: url("${appBackground}");
        background-size: cover;
        color: white;  
    }

    #root {
        margin: 0 50px;
    }

    button {
        cursor: pointer;
    }
`;
