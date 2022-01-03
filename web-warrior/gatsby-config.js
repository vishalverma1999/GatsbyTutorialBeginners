/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // all right so we know now that gatsby can work with multiple data sources and it can add them all to our graphql layer however for it to do this for each source that we use we need to install and register a source plugin and that way gatsby knows how to connect to that data source now the source plugins are all registered inside the gatsby config file inside the plugins array right here now sometimes plugins can be registered as just a string name of the plugin, other times as an object when they need extra configuration options now plugins also need to be installed into our project using npm so gatsby can find them as well 
  plugins: [
    'gatsby-transformer-remark',    
    `gatsby-plugin-image`,                // gatsby image plugin gives us access to an image component 
    `gatsby-transformer-sharp`,           // Needed for dynamic images, responsible for processing our images and creating extra image options for our graphql layer
    `gatsby-plugin-sharp`,                // responsible for processing our images and creating extra image options for our graphql layer 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      // source file plugin -  basically tells gatsby how to get documents from a directory
      // You can have multiple instances of this plugin to read source nodes from different locations on your filesystem.
      // but what if we want to limit this just so it gets us files from a single folder for example just from the project folder well we can do that by using what's known as a query argument --- go to filter>sourceInstanceName>eq(equals) and then enter the name of the source instance
      resolve: `gatsby-source-filesystem`,  // resolve- tells us which source plugin we are using
      options: {
        name: `projects`,                     // name - it is the name of the plugin instance
        path: `${__dirname}/src/projects/`,   // tells gatsby which directorate to look in
      },
    },
  ],

  // gatsby is automatically going to take metadata and add it to the graphql layer and no plugins or anything needed
  siteMetadata: {
    // we can have different properties and values inside this object
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright @2022 Web Warrior',
    contact: 'me@webwarrioruk.com',
  }
}


// every time u change gatsby config file u need to restart gatsby

/* 

 */
