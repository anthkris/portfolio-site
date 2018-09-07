import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TemplateWrapper from './TemplateWrapper';
import '../layouts/index.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <TemplateWrapper>
          {children}
        </TemplateWrapper>
    )}
  />
)

export default Layout;
