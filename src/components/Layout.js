import React from 'react';
import styled from 'styled-components';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css'; // this will auto show and hide the link on focus
import PageHead from './PageHead';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  background: var(--snow);
  min-height: 100%;
`;

const Layout = ({ children }) => {
  let markText;
  let tagline;
  if (children.props.location.pathname === '/play') {
    markText = 'is making stuff';
    tagline = 'on the interwebs';
  } else if (children.props.location.pathname === '/writing') {
    markText = 'is writing';
    tagline = 'to be as transparent, helpful, and reflective as they can';
  } else if (children.props.location.pathname === '/contact') {
    markText = 'is around';
    tagline = 'somewhere';
  } else {
    markText = 'Anthony';
    tagline = 'makes work you can play';
  }
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <SkipNavLink />
        <PageHead markText={markText} tagline={tagline} />
        <SkipNavContent />
        <main>{children}</main>
      </ContentStyles>
    </>
  );
};

export default Layout;
