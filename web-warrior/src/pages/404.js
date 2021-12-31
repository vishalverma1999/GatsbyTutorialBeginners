import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
    return (
        <Layout>
            {/* content b/w layout wrapper is children of the wrapper and we can collect it in Layout component as prop from each page */}
            <div>
                <h2>404</h2>
                <p>Sorry page does not exist</p>
            </div>
        </Layout>
    )
}

/*
we're still gonna see during development the gatsby development 404 page and that's just to help us as developers but you can preview our custom 404 page now here and we see it and that is what users will see when you deploy your application to the web if they go to a route that doesn't exist
 */
