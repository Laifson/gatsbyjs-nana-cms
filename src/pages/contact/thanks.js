
import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Thanks = (props) => {
    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata.social

    return (
        <Layout location={props.location} title={siteTitle} social={social}>
            <SEO title="Danke für Deine Nachricht | Die Form wurde erfolgreich gesendet" />


            <article className="post-content page-template no-image">
              <div className="thank-you">
                <div className="post-content-body">
                    <h1>Danke für Deine Nachricht</h1>
                    <p> Deine Nachricht wurde erfolgreich versendet</p>
                    <p><a href="/">zurück zur Startseite</a></p>
                </div>
              </div>
            </article>
        </Layout>
    )

}

export default Thanks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social{
          twitter
          facebook
        }
      }
    }
  }
`
