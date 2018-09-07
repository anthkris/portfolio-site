module.exports = {
  siteMetadata: {
    title: 'K. Anthony: LX Designer',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/components/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/src/pages/posts/featured`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 810,
                quality: 60,
                linkImagesToOriginal: false,
              },
            },
            {
              resolve: "gatsby-remark-smartypants",
              options: {
                dashes: "oldschool",
              },
            },
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                width: 800,
                ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                noIframeBorder: true //Optional: Disable insertion of <style> border: 0
              }
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (eg <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (eg for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: "language-",
                // This is used to allow setting a language for inline code
                // (i.e. single backticks) by creating a separator.
                // This separator is a string and will do no white-space
                // stripping.
                // A suggested value for English speakers is the non-ascii
                // character '›'.
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
              }
            },
            `gatsby-remark-responsive-iframe`,
            `gatsby-remark-katex`,
            `gatsby-remark-copy-linked-files`,
          ],
        },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
        languages: ['en'],   
        // Fields to index. If store === true value will be stored in index file. 
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'tags', store: true },
          { name: 'categories', store: true },
          { name: 'content' },
          { name: 'path', store: true },
        ],
        // A function for filtering nodes. () => true by default
        filterNodes: node => node.frontmatter !== undefined,
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
              title: node => node.frontmatter.title,
              tags: node => node.frontmatter.tags,
              categories: node => node.frontmatter.categories,
              content: node => node.rawMarkdownBody,
              path: node => node.frontmatter.path,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "K. Anthony Portfolio",
        short_name: "KAnthony",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ea3257",
        display: "minimal-ui",
        icon: "src/pages/posts/featured/logoColor.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`
  ],
};
