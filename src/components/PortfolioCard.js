import React from 'react';
import styled from 'styled-components';

const PortfolioCardStyles = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  padding: 2rem;
  margin-top: 4rem;

  .portfolioItemImg {
    margin-top: -4rem;
    padding-bottom: 1rem;
    max-height: 100px;
  }

  .itemDescription {
    text-align: left;
  }

  .portfolioItemLink {
    margin-top: auto;
    color: var(--link-pink);
    .goArrow {
      font-family: 'Fredoka Dingbats';
    }
  }
`;

const PortfolioCard = ({ imgSrc, imgAlt, itemTitle, itemDesc, itemUrl }) => (
  <PortfolioCardStyles>
    <img className="portfolioItemImg" src={imgSrc} alt={imgAlt} />
    <h4>{itemTitle}</h4>
    <p className='itemDescription'>{itemDesc}</p>
    <a href={itemUrl} className='portfolioItemLink'>
      Give it a go <span className="goArrow">L</span>
    </a>
  </PortfolioCardStyles>
);

export default PortfolioCard;
