import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const LocationPage = ({ data }) => {
    const post = data.markdownRemark
    const { title, description } = post.frontmatter

    return (
        <Layout title={data.site.siteMetadata.title} social={data.site.siteMetadata.social}>
            <Seo title={title} description={description} />
            <article className="location-page">
                <header className="post-content-header">
                    <h1 className="post-content-title">{title}</h1>
                    <p className="post-content-excerpt">{description}</p>
                </header>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                    <div style={{ flex: "1 1 400px", minHeight: "600px" }}>
                        <iframe
                            title="nana Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.3421436223225!2d7.592385577711017!3d50.36017437157512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47be7db4a8c48a37%3A0xea640cdae2d7ead0!2snana%20%7C%20breakfast%20meze%20bar!5e0!3m2!1sde!2sde!4v1748194669897!5m2!1sde!2sde"
                            allowFullScreen
                        />
                    </div>

                    <div style={{ flex: "1 1 300px" }}>
                        <p><strong>Adresse:</strong><br />
                            nana Breakfast & Meze Bar<br />
                            Am Plan 14-16<br />
                            56068 Koblenz
                        </p>
                        <p><strong>Telefon:</strong><br />
                            <a href="tel:+4926113327103">0261 133 27 103</a>
                        </p>
                        <p><strong>E-Mail:</strong><br />
                            <a href="mailto:kontakt@nana-mezebar.de">kontakt@nana-mezebar.de</a>
                        </p>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export default LocationPage

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
    markdownRemark(frontmatter: {templateKey: {eq: "location-page"}}) {
      frontmatter {
        title
        description
      }
    }
  }
`
