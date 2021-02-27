import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/knanthony_logo.svg';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  font-family: 'Fredoka One';
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    list-style: none;
    align-items: center;
    margin-top: --6rem;
  }
  li {
    order: 1;
    padding: 0px 5px;
  }
  a {
    text-decoration: none;
    color: var(--black);
    &:hover,
    &:focus,
    &.active {
      background: var(--link-pink);
      padding: 0 5px 5px 5px;
    }
  }
  .logoLink {
    &:hover,
    &:focus {
      background: transparent;
      padding: 0px;
    }
  }
  .logo {
    max-width: 50px;
    width: 100%;
    min-width: 40px;
  }
`;

const Nav = () => (
  <NavStyles>
    <Link className='logoLink' to='/'>
      <img className='logo' src={logo} alt='Home page' />
    </Link>
    <ul>
      <li>
        <Link activeClassName='active' to='/writing'>
          Writing
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/play'>
          Play
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/explorables'>
          Explorables
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/contact'>
          Contact
        </Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
