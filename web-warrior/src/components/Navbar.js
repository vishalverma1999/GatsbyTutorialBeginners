import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {

    // how to make a query inside a component that is not a page we can't do it the same way as we done in pages. instead what we have to do is use something called a static query using the hook called useStaticQuery and this is the hook we use to make a query inside the component this time we don't do it outside the component unlike in pages we have done
    // we can remove- query SiteInfo and it will work perfectly ok
    // here is a difference between these static queries right here and the page queries at the bottom of page components and that is in page components we can use query variables now we've not seen those yet but you'll see them later and in these queries you can't use query variables so just be aware of that 
    // one other thing i also want to mention is that this hook right here sometimes it can be a bit temperamental and throw an error one thing i've noticed is that if i use components that are not capitalized right here this sometimes throws an error and it doesn't really like it so i always make sure these are capitalized so i don't get that error now i'm not done much digging around with this it's just my recent experience using it
    // finally one more thing you can only use this hook once inside a component so you can't use this hook again down here as that won't work 

    const data = useStaticQuery(graphql`
    query SiteInfo {    
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const { title } = data.site.siteMetadata;

    return (
        <nav>
            <h1>{title}</h1>
            <div className='links'>
                <Link to='/' >Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/project'>Portfolio Projects</Link>
            </div>
        </nav>
    )
}

/*
Instead,it would be nice to create a single layout component which incorporates the navbar the footer and anything else that's consistent across all pages and then just wrap all of our different pages right here with that single layout component 
*/

