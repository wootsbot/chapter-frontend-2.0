const path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const ARTICLE_OVERVIEW_TEMPLATE = path.resolve(
    `src/templates/ArticleOverviewTemplate.js`
  )

  return graphql(`
    {
      posts: allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const listArticles = result.data.posts.edges.reverse()

    // Make pages detail article
    listArticles.forEach(({ node }) => {
      const title = node.frontmatter.title

      createPage({
        path: title,
        component: ARTICLE_OVERVIEW_TEMPLATE,
        context: {
          title,
        },
      })
    })
  })
}
