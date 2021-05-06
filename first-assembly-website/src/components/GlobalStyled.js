import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }

    p{
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
        }
`;


export default GlobalStyle;