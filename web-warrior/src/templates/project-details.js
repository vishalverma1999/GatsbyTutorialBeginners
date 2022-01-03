// REASON BEHIND CREATING TEMPLATE:-
// now since we have six projects we're gonna need six details pages one for each project now i guess what we could do is make all of those pages individually manually inside the pages folder using a separate file for each one but that would be overkill and it means every time that we add a new project to our data new markdown file we're also going to need to make a new page component for it which is very time consuming and it also means that if we ever change the design of that details page then we're going to have to rewrite every page component from scratch that we have, again very time consuming so it would be much better if gatsby could somehow generate pages for us for each of these different projects that we have and then if we ever add more projects in the future gatsby could then maybe auto generate a page for that as well and IT can do that generating pages since it is a part of the core functionality of gatsby and it's going to be our focus for the next few lessons
// we don't create our templates inside the pages folder, instead we create a new folder inside the source folder called templates and then we can create our template components inside it

// import { graphql } from 'gatsby'
// import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import {details, featured, html} from '../styles/project-details.module.css'

export default function ProjectDetails({children}) {
    return (
        <Layout>
            <div className={details}>
                {children}
                <h2>title</h2>
                <h3>stack</h3>
                <div className={featured}>
                    {children}
                    {/* <GatsbyImage image={ } /> */}
                </div>
                {/* outputting html dynamically from md file */}
                {/* the way we do this in react is first of all just using a single div that self closes and then we can add a prop called dangerouslySetInnerHTML*/}
                {/* this is how we output some html dynamically in a div in react. It's called dangerously because react wants you to know that this is potentially dangerous and it can lead to cross-site scripting attacks if your data is compromised so that's just what it's called but it's going to be fine in our case we're going to output the html that we get from these markdown files */}
                {/* <div className={html} dangerouslySetInnerHTML={}/> {children} */}
            </div>
        </Layout>
    )
}

