import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            <div className="content">
                {/* content of each page, for injecting use the children prop */}
                {children}
            </div>
            <footer>
                <p>copyright @2022 Blah Blah Blah</p>
            </footer>
        </div>
    )
}
