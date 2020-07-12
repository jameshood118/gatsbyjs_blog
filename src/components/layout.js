import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="container is-fluid">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={`/`} className="navbar-iteem">
            {data.site.siteMetadata.title}
          </Link>

          <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item"
              to={`/about/`}
            >
              About
      </Link>

          </div>

          <div className="navbar-end">
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}