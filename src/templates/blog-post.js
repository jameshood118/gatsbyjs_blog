import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="columns">
        <div class="column is-12">
          <div className="card">
            <header class="card-header">
              <h1 class="card-header-title">
                {post.frontmatter.title}
              </h1>
            </header>
            <div className="card-content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`