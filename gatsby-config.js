const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `K. Anthony Portfolio`,
    siteUrl: `https://knanthony.com`,
    description: `Kristin is making Work you can Play`,
    twitter: `@anthkris`,
  },
  plugins: ['gatsby-plugin-styled-components'],
};
