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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ],
};
