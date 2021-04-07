import React from 'react'
import Layout from './layout'

const Article = ({title, content}) => {
  return (
    <Layout>
      <h2>{title}</h2>
      <p>{content}</p>
    </Layout>
  )
}

export default Article
