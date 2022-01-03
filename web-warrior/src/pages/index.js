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
        layout: FIXED
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`



/*










01:38
open up my terminal and come over here
01:40
and i'm going to paste
01:41
in and press enter and then also while
01:44
that's going on i'm going to come back
01:45
over here
01:46
and i'm going to grab this because these
01:48
are the other two things we need to
01:49
install as well
01:50
so remember this one gives us access to
01:52
the image component
01:54
which we're going to use and this one
01:55
right here is responsible
01:57
for processing the images and giving us
01:59
a graphql interface
02:01
so i'm going to copy that as well come
02:03
back over here paste them
02:04
in and press enter to install all right
02:07
so now that's done the next thing i need
02:09
to do is come to the source folder let
02:11
me just close some of these
02:13
and create an images folder now remember
02:16
this has to go inside the source folder
02:19
because
02:19
we're going to process those images if
02:22
we place it inside static
02:24
then it's just going to be made
02:25
available to the browser
 */