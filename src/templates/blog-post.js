import React from "react";
import Helmet from "react-helmet";
import {Link} from "gatsby";
import kebabCase from "lodash/kebabCase";
import { DiscussionEmbed } from "disqus-react";
import Layout from '../components/layout';
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-twilight.css";

import '../styles/blog-post.scss';

class Template extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const disqusShortname = "knanthony";
      const disqusConfig = {
        identifier: post.id,
        title: post.frontmatter.title,
      };
    const categories = post.frontmatter.categories;
    const tags = post.frontmatter.tags;
    return (
      <Layout>
        <div className="blog-post-container">
         <Helmet title={`The Latest - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            {categories && categories.length ? (
                  <small>In:&nbsp;
                      {categories.map(category => (
                        <Link key={category + `category`} to={`/categories/${kebabCase(category)}/`}>{category},&nbsp;</Link>
                      ))}
                    </small>
            ) : null}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}&nbsp;</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Layout>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        categories
      }
    }
  }
`
;
