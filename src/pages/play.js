import React from 'react';
import styled from 'styled-components';
import PlainCard from '../components/PlainCard';

const PlayProjectStyles = styled.section`
  font-size: 1.6rem;
  padding: 2rem;
  text-align: center;
  .playProjectCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    text-align: left;
  }
`;

const PlayPage = () => (
  <>
    <PlayProjectStyles className="interior">
      <div className='playProjectCards'>
        <PlainCard
          itemTitle='Games on Itch.io'
          itemDesc='My growing portfolio of tiny games developed with game-specific toolsets.'
          itemUrl='https://anthkris.itch.io/'
        />
        <PlainCard
          itemTitle='Simone'
          itemDesc='A jQuery-based Simon clone. Betcha can’t beat it!'
          itemUrl='https://codepen.io/anthkris/full/WGGAQz'
        />
        <PlainCard
          itemTitle='A Tribute to Yma Sumac'
          itemDesc='A responsive website built in tribute to the great Peruvian soprano, Yma Sumac.'
          itemUrl='https://codepen.io/anthkris/full/qqyLEg'
        />
      </div>
    </PlayProjectStyles>
  </>
);

export default PlayPage;
