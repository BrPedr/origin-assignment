import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        outline: 0;
        
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;

        overflow: hidden;
    }

    body {
        -webkit-font-smoothin: antialiased !important;
    }

    a, button, input {
        border: 0;
        outline: 0;

        text-decoration: none;  
        }

        a {
            color: black;
        }

        ul, li  {
            list-style: none;
        }

    :root {
        --neutralWhite: #FFFFFF;

        --blueGrayPrimary: #708797;
        --blueGraySecondary: #F4F8FA;
        --blueGrayTerciary: #4D6475;
        --blueGrayQuaternary: #CBD5DC;
        --blueGrayQuinary: #1E2A32;
        --blueGraySenary: #e9eef2;
        --blueGrayArrow: #8A9CA9;

        --brandColorPrimary: #1B31A8;
        --brandColorSecondary: #0079FF;
    }
`;
