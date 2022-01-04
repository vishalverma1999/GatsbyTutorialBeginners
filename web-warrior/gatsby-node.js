// WHY TO USE gatsby-node.js file?
// so this gatsby node file is a file that will run at build time in a 'node environment' so we can run certain functions inside this file to do things like fetch data and then generate pages with that data based on a template file which we already have


// HOW TO USE IT?
// so the first step inside this file is to create a property called createPages on the exports object, !!!now this is how we export things in a node environment it's a little bit different from es6 modules
// As an argument we get an object inside this asynchronous function and we can destructure a couple of things from this object the first thing is going to be graphql. so much like we used graphql and we imported it in our page components to make queries similarly we're destructuring it from exports object so we can use it to make queries inside this function, the second thing we're going to grab from here is something called actions and actions contains a few different methods that we can use inside this function and one of those is a method to generate pages.


const path = require('path');   // to use 

// this is the way to export in node environment and not the ES6 module export rule
exports.createPages = async ({graphql, actions})=>{

    // grabbing all the markdown files using graphql query and extracting slug frontmatter because slug will give us the route for that particular page. Remember!!! here graphql is used as a function taking query as argument
    const {data} = await graphql(`   
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
      
    `)

    // nodes is an array of all the items that we get back in response
    // now the only thing we have is the slug right here but we can still pass in the slug to the template and then from the template we can use that slug to make another query to get the data for the project with that slug, basically we will be using slug as query variable
    data.allMarkdownRemark.nodes.forEach(node =>{              // for each node createPage with the help of actions and createPage object take properties to make a page
        actions.createPage({
            path: '/project/' + node.frontmatter.slug,             // path for a page
            component: path.resolve('./src/templates/project-details.js'),     // what components do we want to use to generate this page now this is just going to be the template page and it needs to be an absolute path to that so in order to create this absolute path i'm going to import path i.e. const path = require('path'); this is how we import something in a node environment we use require and we want to require the path module now we don't need to install anything for that it's automatically built into node
            context: { slug: node.frontmatter.slug }        //  this is going to be what variable do we want to pass in to the template when we're generating this page
        })
    })

}
