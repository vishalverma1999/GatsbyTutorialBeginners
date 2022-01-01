import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'


export default function Home() {
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
    </section>
    </Layout>
  ) 
}
