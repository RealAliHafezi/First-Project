import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --white : #fff;
        --background : #f5f1f1;
        --purple : #d77fa1;
        --blue : #d6e5fa ;
        --purple2 : #bbabda;
        --black : #000;
        --green : #5cb85c;
    }
    @font-face {
        font-family: "vazir";
        src : url("./assets/font/Vazir-Regular.ttf") format("ttf")
    }
    html {
        scroll-behavior: smooth;
    }

    * , *::after , *::before , body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    body {
        padding: 0;
        margin: 0;
        outline: 0;
        border: 0;
        background-color: var(---background);
        font-family: vazir;
        box-sizing: border-box;
    }
    ul , ol {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    button , input {
        outline: none;
        border: none;
        &:focus {
            outline: none;
        }
    }
`;
export default GlobalStyle;
