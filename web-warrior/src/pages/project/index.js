import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/project.module.css'

export default function Projects() {
    return (
        <Layout>
            {/* content b/w layout wrapper is children of the wrapper and we can collect it in Layout component as prop from each page */}
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I'have created</h3>
            </div>
        </Layout>
    )
}

// http://localhost:8000/project - To access this route just create index.js file inside project folder, since we know index file is the base route


