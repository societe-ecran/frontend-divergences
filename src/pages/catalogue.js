import React from "react"
import { StaticQuery, graphql, } from "gatsby"
// import Layout from "../components/layout"
import "../assets/css/main.css"
import "../fonts/fonts.css"
import LivresComponent from "../components/catalogue"
import Layout2 from "../components/layout2"
import Collections from "../components/collections"

const IndexPage = () => (
  
  <Layout2>
  
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
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
        <LivresComponent articles={data.allStrapiArticle.edges} />
        </div>
   
   
      )}
    />
    

  </Layout2>
)

export default IndexPage