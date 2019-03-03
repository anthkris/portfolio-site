import React from "react";
import {Link, graphql} from "gatsby";
import BlogTile from '../components/BlogTile.js';
import Layout from '../components/Layout.js';

import '../styles/blog-listing.scss';

export default function Blog({ data, pathContext }) {
  const { edges: posts } = data.allMarkdownRemark;
  const { currentPage, pagesTotal } = pathContext;
  let nextPage;
  let prevPage;

  if (currentPage > 1) {
    let path = "/blog";
    if (currentPage > 2) {
      path = "/blog/" + (currentPage - 1);
    }
    prevPage = <Link to={path}>« Newer Posts</Link>;
  }

  if (currentPage < pagesTotal) {
    nextPage = <Link to={"/blog/" + (currentPage + 1)}>Older Posts »</Link>;
  }
  let pagesLinks = [];
  for (var i = 1; i <= pagesTotal; i++) {
    if (i === currentPage) {
      pagesLinks.push(
        <span className="current-page" key={"pg" + i}>
          {i}
        </span>
      );
    } else {
      if (i === 1) {
        pagesLinks.push(
          <Link to="/blog" key={"pg" + i}>
            {i}
          </Link>
        );
      } else {
        pagesLinks.push(
          <Link to={"/blog/" + i} key={"pg" + i}>
            {i}
          </Link>
        );
      }
    }
  }

  return (
    <Layout>
      <div className="blog-posts center mw8 db ph3">
        <h1>The Latest</h1>
        {posts.map(({ node }) => (
          <Link key={node.id} to={node.frontmatter.path}>
            <BlogTile title={node.frontmatter.title} info={node.frontmatter.date} summary={node.excerpt} imgSizes={node.frontmatter.featured.childImageSharp.sizes} />
          </Link>
        ))}
        <div className="nextPrevLinks">
          {prevPage}
          {pagesLinks}
          {nextPage}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery ($pageSize: Int, $pageSkip: Int) {
    allMarkdownRemark(
      limit: $pageSize
      skip: $pageSkip
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            featured {
              childImageSharp {
                sizes(maxWidth: 500, maxHeight: 285, quality: 70, traceSVG: { color: "#ea3257" }, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
