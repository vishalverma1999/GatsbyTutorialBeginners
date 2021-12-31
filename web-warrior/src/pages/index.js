import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      {/* content b/w layout wrapper is children of the wrapper and we can collect it in Layout component as prop from each page */}
    <section>
      <div>
        <h2>Design</h2>
        <h3>Deploy & Develop</h3>
        <p>UX designer & web developer based on mars</p>
      </div>
    </section>
    </Layout>
  ) 
}
