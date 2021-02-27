import React from 'react';
import styled from 'styled-components';

const PlainCardStyles = styled.a`
  background: var(--c-steely-blue);
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;
  &:hover,
  &:focus {
    background: var(--portfolio-yellow);
  }
`;

const PlainCard = ({ imgSrc, imgAlt, itemTitle, itemDesc, itemUrl }) => (
  <PlainCardStyles href={itemUrl}>
    {imgSrc && <img src={imgSrc} alt={imgAlt} />}
    <h4 className="itemTitle">{itemTitle}</h4>
    <p className="itemDescription">{itemDesc}</p>
  </PlainCardStyles>
);

export default PlainCard;
