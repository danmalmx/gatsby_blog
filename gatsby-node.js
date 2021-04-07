/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const articles = [
  {id: 1, title: 'The first title', content: 'The first conent' },
  {id: 2, title: 'The second title', content: 'The second conent' },
  {id: 3, title: 'The third title', content: 'The third conent' },
]

exports.createPages = async ({actions: { createPage } }) => {
  articles.forEach(({id, title, content}) => {
    createPage({
      path: `/articles/${id}`,
      component: require.resolve("./src/templates/article"),
      context: {
        id,
        title,
        content,
      }
    })
  })
}
