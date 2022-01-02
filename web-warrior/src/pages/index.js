import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'


export default function Home({ data }) {

  console.log(data);
  const { description, title } = data.site.siteMetadata;
  return (
    <Layout>
      {/* content b/w layout wrapper is children of the wrapper and we can collect it in Layout component as prop from each page */}
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Deploy & Develop</h3>
          <p>UX designer & web developer based on mars</p>
          <Link className={styles.btn} to='/project'>My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
        <p> {title} - {description} </p>
      </section>
    </Layout>
  )
}

// How do we actually make that query from our components well there's a couple of different ways that we can make the queries from our components in this lesson i'm going to show you how to make page queries from our page components and then later on i'll show you how to make queries from other components that are not pages as well 
export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`
// how do we actually use this data inside our component well gatsby is going to find this query first of all and then it's going to give us access to a data property inside our component on the props so we automatically take in props right here this props object right but what we could do is just destructure from that object a data property and that is any data that we get back from this thing right here from this query



 