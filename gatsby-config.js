import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `K. Anthony Portfolio`,
    siteUrl: `https://knanthony.com`,
    description: `Kristin is making Work you can Play`,
  },
  plugins: ['gatsby-plugin-styled-components'],
};
