// REASON BEHIND CREATING TEMPLATE:-
// now since we have six projects we're gonna need six details pages one for each project now i guess what we could do is make all of those pages individually manually inside the pages folder using a separate file for each one but that would be overkill and it means every time that we add a new project to our data new markdown file we're also going to need to make a new page component for it which is very time consuming and it also means that if we ever change the design of that details page then we're going to have to rewrite every page component from scratch that we have, again very time consuming so it would be much better if gatsby could somehow generate pages for us for each of these different projects that we have and then if we ever add more projects in the future gatsby could then maybe auto generate a page for that as well and IT can do that generating pages since it is a part of the core functionality of gatsby and it's going to be our focus for the next few lessons
// we don't create our templates inside the pages folder, instead we create a new folder inside the source folder called templates and then we can create our template components inside it

import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import { details, featured, htmlStyling } from '../styles/project-details.module.css'

export default function ProjectDetails({ children, data }) {

    const { html } = data.markdownRemark;
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className={details}>
                {children}
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={featured}>
                    {children}
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
                </div>
                {/* outputting html dynamically from md file */}
                {/* the way we do this in react is first of all just using a single div that self closes and then we can add a prop called dangerouslySetInnerHTML*/}
                {/* this is how we output some html dynamically in a div in react. It's called dangerously because react wants you to know that this is potentially dangerous and it can lead to cross-site scripting attacks if your data is compromised so that's just what it's called but it's going to be fine in our case we're going to output the html that we get from these markdown files */}
                <div className={htmlStyling} dangerouslySetInnerHTML={{ __html: html }} />
                {/*  to output the html in a react component is by adding in an object, then a property in that object which is double underscore html and then then the value in our case it's html that we desructured above */}
                {children}
            </div>
        </Layout>
    )
}


export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }  
`

/*
query ProjectDetails($slug: String) {    // This is the way we pass variable to queries by writing $variableNameAndNameToBeSameAsItPassed : TypeOfData
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {      //telling graphql which markdown page we want and the way we're going to do that is by saying we want it to have a specific front matter so this right here this is just a query argument  
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED)
          }
        }
      }
    }
  }  
}
 */