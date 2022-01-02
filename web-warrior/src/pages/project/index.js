import React from 'react'
import Layout from '../../components/Layout'
// import * as styles from '../../styles/project.module.css'
import { portfolio } from '../../styles/project.module.css'   // This is the preferred way to import css module that you created. You can also import all styles using the import * as styles syntax e.g. import * as styles from './mystyles.module.css'. However, this won’t allow webpack to treeshake your styles so we discourage you from using this syntax. Migrating all your CSS could be painful or you’re relying on third-party packages that require you to use CommonJS. Link to preffered way gatsbyDocs https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules

export default function Projects({ children }) {
    return (
        <Layout>
            {/* content b/w layout wrapper is children of the wrapper and we can collect it in Layout component as prop from each page */}
            <div className={portfolio}>
                {children}
                <h2>Portfolio</h2>
                <h3>Projects & Websites I'have created</h3>
            </div>
        </Layout>
    )
}

// http://localhost:8000/project - To access this route just create index.js file inside project folder, since we know index file is the base route


