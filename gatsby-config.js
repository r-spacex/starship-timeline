const siteUrl = `https://starshiptimeline.space`;

module.exports = {
  siteMetadata: {
    title: `Starship Timeline`,
    description: `Keep up to date with SpaceX's Super Heavy Starship, the rocket that will revolutionize space exploration by providing cheaper access to space and making human life multiplanetary.`,
    author: `Albéric Trancart`,
    siteUrl
  },
  plugins: [
    // Codebase
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },

    // Assets
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    // SEO
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-110877372-2`,
        head: false
      }
    },
    `gatsby-plugin-netlify`
  ]
};
