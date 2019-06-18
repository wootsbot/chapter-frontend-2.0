import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.PureComponent {
  render() {
    const { data } = this.props
    const { edges } = data.posts

    return (
      <Layout>
        <SEO title="Chapter" />

        {edges.map(({ node }) => (
          <ul>
            <li key={node.id}>
              <Link to={`/${node.frontmatter.title}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          </ul>
        ))}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
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
`
