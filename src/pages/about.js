import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About Some Star Peopley Peeps</h1>
      <div className="columns is-multiline">
        {data.swapi.allPeople.edges.map(({ node }) => (
          <div key={node.id} className="column is-4">
            <div className="card">
              <div className="card-content">
                {node.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    swapi {
    allPeople(first: 10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
  }
`