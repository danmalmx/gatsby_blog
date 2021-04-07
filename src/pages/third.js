import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"

const third = () => {
  return (
    <Layout>
    <div>
      <h1>
        The third page
      </h1>
      <Link to="/">Go back home</Link> <br />
    </div>
  </Layout>
  )
}

export default third
