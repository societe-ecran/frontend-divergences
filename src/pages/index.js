import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import Layout from "../components/layout"
import "../assets/css/main.css"
import EvenementsComponent from "../components/evenements"
import "../fonts/fonts.css"

const IndexPage = () => (
  
  
  <Layout>
  
    <StaticQuery
      query={graphql`
        query {
          allStrapiEvenements {
            edges {
              node {
                strapiId
                intitule
                Adresse
                dateDeLevenement(locale: "fr")
                Horaires
                Ville
              }
            }
          }
          allStrapiArticle {
            edges {
              node {
                strapiId
                Auteur
                prix
                DateDeParution(locale: "fr")
                category {
                  name
                }
          #       image {
          #   childImageSharp {
          #     fixed(width: 200, height: 125) {
          #       ...GatsbyImageSharpFixed
          #     }
          #   }
          # }
                # image {
                #   publicURL
                # }
              }
            }
          }
        }
      `}
      render={data => (
        
  
    <EvenementsComponent class="navFont" articles={data.allStrapiEvenements.edges} />
   
      )}
    />
    

  </Layout>
)

export default IndexPage
