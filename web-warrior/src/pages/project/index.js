import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
// import * as styles from '../../styles/project.module.css'
import { portfolio, projectStyling } from "../../styles/project.module.css" // This is the preferred way to import css module that you created. You can also import all styles using the import * as styles syntax e.g. import * as styles from './mystyles.module.css'. However, this won’t allow webpack to treeshake your styles so we discourage you from using this syntax. Migrating all your CSS could be painful or you’re relying on third-party packages that require you to use CommonJS. Link to preffered way gatsbyDocs https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules

export default function Projects({ children, data }) {

  console.log(data);
  const projects = data.projects.nodes; // projects is an array
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      {/* content b/w layout wrapper is children of the wrapper and we can collect it in Layout component as prop from each page */}
      <div className={portfolio}>
        {children}
        <h2>Portfolio</h2>
        <h3>Projects & Websites I'have created</h3>
        <div className={projectStyling}>
          {children}
          {projects.map(project => (
            <Link to={"/project/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3> {project.frontmatter.title} </h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like What You See? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

// http://localhost:8000/project - To access this route just create index.js file inside project folder, since we know index file is the base route

// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {   
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
  contact: site{
    siteMetadata{
      contact
    }
  }
}
`
// Multiple Queries in a single page, one is allMarkdownRemark and other is site.......that's how multiple queries are created
// another thing we could actually name these parts of the query if we want to as given above 'projects' and 'contact'. Although it's not compulsory but it sometimes help to reduce confusing in deciding that what the data is about, we are getting after query
// (sort: {fields: frontmatter___date, order: DESC}) , this is the sorting or odering of the query by date
