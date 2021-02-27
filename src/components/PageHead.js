import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const PageHeadStyles = styled.header`
  background: var(--portfolio-yellow);
  padding: 2rem;
  font-family: 'Fredoka One';
  text-align: center;
  text-transform: uppercase;

  h1 {
    margin-bottom: 0px;
    font-size: 1.5em;
  }

  .mark {
    padding: 10px;
    width: 70%;
    display: block;
    margin: 10px auto;
  }

  h2 {
    font-size: 1rem;
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.3rem;
    }
  }
`;

const PageHead = ({
  markText = 'Anthony',
  tagline = 'Makes Work you can Play',
}) => (
  <PageHeadStyles>
    <div className='interior'>
      <Nav />
      <h1>
        Kristin
        <span className='mark'>{markText}</span>
      </h1>
      <h2>{tagline}</h2>
    </div>
  </PageHeadStyles>
);

export default PageHead;
