import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"

import Layout from "../components/layout"

function ArticleOverviewTemplate({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log(frontmatter)

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

ArticleOverviewTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
export default ArticleOverviewTemplate
