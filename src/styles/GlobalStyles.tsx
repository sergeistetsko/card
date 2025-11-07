import {createGlobalStyle} from 'styled-components'
import {colorsTheme} from './Theme.styled.tsx'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${colorsTheme.colors.grey.light};
        font-family: 'Inter', sans-serif;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`