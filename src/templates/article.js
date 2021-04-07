import React from 'react'
import Article from '../components/Article'

const article = (props) => {
  return (
    <Article
      title={props.pageContext.title}
      content={props.pageContext.content}
    />
  )
}

export default article
