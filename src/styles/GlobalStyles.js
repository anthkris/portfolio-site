import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --game-blue: #37ABD4;
    --black: #2E2E2E;
    —-portfolio-yellow: #FFCC29;
    --snow: #F4F4F4;
    —-portfolio-link-pink: #FA3C85;
    -—portfolio-light-blue: #C1E8FA;
    -—porfolio-cold-blue: #96C4D9;
  }

  html {
    font-size: 18px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* Uses Gatsby magic to load pixelated images before the real images */
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--game-blue) var(--snow);
  }
  body::-webkit-scrollbar-track {
    background: var(--snow);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--game-blue) ;
    border-radius: 6px;
    border: 3px solid var(--snow);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

export default GlobalStyles;
