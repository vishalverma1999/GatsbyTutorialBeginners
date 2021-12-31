import React from 'react'
import {Link} from 'gatsby'

export default function Navbar() {
    return (
        <div className='links'>
            <Link to='/' >Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/project'>Portfolio Projects</Link>
        </div>
    )
}

/*
Instead,it would be nice to create a single layout component which incorporates the navbar the footer and anything else that's consistent across all pages and then just wrap all of our different pages right here with that single layout component 
*/
