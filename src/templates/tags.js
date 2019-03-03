import React from "react";
import PropTypes from "prop-types";
import Layout from '../components/layout';

// Components
import {Link} from "gatsby";

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout>
      <div className='center mw8 db ph3 pt3 pb5'>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { path, title } = node.frontmatter;
            return (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
        {/*
                This links to a page that does not yet exist.
                We'll come back to it!
              */}
        <Link to="/Tags">All tags</Link>
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
