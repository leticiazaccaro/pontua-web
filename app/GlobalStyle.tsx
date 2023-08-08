import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    input, button {
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;
