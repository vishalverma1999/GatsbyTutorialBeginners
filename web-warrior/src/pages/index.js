import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'


export default function Home({ data }) {

  console.log(data);

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
        {/* if image is in static folder then you can just refernce like i.e. /banner.png but if it's inside src folder structure the you need to add relative path like added in query written below  */}
        {/* that we're going to use a query to get the optimized images we need instead of just referencing a public address  */}
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="site banner" />
      </section>
    </Layout>
  )
}

// i'm going to use an argument called relative path because i want to dictate which file i want to get if i don't do this then it's just going to get any old file it finds but i want to say what the relative path is going to be now in our case it's just going to be banner.png that is the relative path relative to images folder
export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED,
        placeholder: BLURRED,
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`