module.exports = {
  siteMetadata: {
    title: `Super Sweet Sites`,
    description: `Amazing websites, priced for small businesses.`,
    author: `aaron`,
    menuLinks:[
      {
        name:'services',
        link:'/services'
      },
      {
        name:'work',
        link:'/work'
      },
      {
        name:'contact',
        link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `p0k6vqctwrug`,
        accessToken: `lPpVpMkAd5EeDU9vLGJj7ayoFWJ4EcM7Ah53j80Lix0`,
      },
      
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
