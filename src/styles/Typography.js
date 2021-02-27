import { createGlobalStyle } from 'styled-components';

import fredokaFont from '../assets/fonts/fredoka-one-v8-latin-regular.woff';
import latoRegular from '../assets/fonts/lato-v17-latin-regular.woff';
import latoBold from '../assets/fonts/lato-v17-latin-700.woff';
import latoItalic from '../assets/fonts/lato-v17-latin-italic.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Fredoka One';
    src: url(${fredokaFont});
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: url(${latoItalic});
  }
  @font-face {
    font-family: 'Lato';
    font-size: normal;
    font-weight: 400;
    src: url(${latoRegular});
  }
  @font-face {
    font-family: 'Lato';
    font-size: normal;
    font-weight: 700;
    src: url(${latoBold});
  }
  html {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Fredoka One';
    margin: 0;
  }
  mark, .mark {
    background: var(--black);
    color: var(--snow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  a {
    color: var(--portfolio-link-pink);
    text-decoration-color: var(--portfolio-link-pink);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
