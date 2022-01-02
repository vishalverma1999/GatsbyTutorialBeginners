/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],

  // gatsby is automatically going to take metadata and add it to the graphql layer and no plugins or anything needed
  siteMetadata: {   
    // we can have different properties and values inside this object
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright @2022 Web Warrior',
  }
}

/*
every time u change gatsby config file u need to restart gatsby
 */
