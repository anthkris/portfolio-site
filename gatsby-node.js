const path = require('path');
const _ = require('lodash');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const pageSize = 12;
  const blogIndexTemplate = path.resolve(`src/templates/Blog.js`);
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const categoryTemplate = path.resolve(`src/templates/categories.js`);

  return graphql(`{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            html
            id
            frontmatter {
              date
              path
              title
              tags
              categories
            }
          }
        }
      }
    }`)
    .then(result => {
      const posts = result.data.allMarkdownRemark.edges;

      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {} // additional data can be passed via context
        });
      });

      // pagination
      const chunkedPosts = _.chunk(posts, pageSize);
      _.each(chunkedPosts, (chunk, index) => {
        let path = "/blog";
        if(index > 0) {
          path = `/blog/${index+1}/`
        }
        createPage({
          path: path,
          component: blogIndexTemplate,
          context:
            {
              pageSize: pageSize,
              pageSkip: index*pageSize,
              pagesTotal: Math.ceil(posts.length / pageSize),
              currentPage: index+1
            },
        })
      })

      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });

      // Tag pages:
      let categories = [];
      // Iterate through each post, putting all found tags into `categories`
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.categories")) {
          categories = categories.concat(edge.node.frontmatter.categories);
        }
      });
      // Eliminate duplicate tags
      categories = _.uniq(categories);

      // Make category pages
      categories.forEach(category => {
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: categoryTemplate,
          context: {
            category,
          },
        });
      });

    });
}
