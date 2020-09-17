import React from "react"
import { StaticQuery, graphql, } from "gatsby"
  // import Layout from "../components/layout"
import Layout2 from "../components/layout2"
import "../assets/css/main.css"
import "../components/leafletmap.css"
import LeafletMap from "../components/leafletmap"
import "../fonts/fonts.css"


const Ounoustrouver = () => (



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
      
<div class="container-fluid enlever-scroll-bar-firefox -webkit-scrollbar">

  

    <section style={{ "margin": "0.5rem 1rem" }}>
      
      </section>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={[46.52863469527167,2.43896484375]}
          zoom={6}
          //markerText={"Hello, this is a marker"}
        />
    }
      
  </div>
        
      )}
    />

  </Layout2>
  
  
  
)

export default Ounoustrouver