import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby";

const ReservationPage = ({ data }) => {
  const post = data.markdownRemark
  const { title, description } = post.frontmatter

  // Load Teburio script after render
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.teburio.de/w2.js?id=yE7hDCk9csX4mQsNN"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Layout title={data.site.siteMetadata.title} social={data.site.siteMetadata.social}>
      <Seo title={title} description={description} />
      <article className="reservation-page">
        <header className="post-content-header">
          <h1 className="post-content-title">{title}</h1>
          <p className="post-content-excerpt">{description}</p>
        </header>

        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
          <div id="teburio-yE7hDCk9csX4mQsNN"></div>
        </div>
      </article>
    </Layout>
  )
}

export default ReservationPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          facebook
        }
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "reservation-page"}}) {
      frontmatter {
        title
        description
      }
    }
  }
`
