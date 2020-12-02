import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import "../fonts/fonts.css"
import LivresComponent from "./livres"

const ParuRecement = () => {

  return (

    <>
      <StaticQuery
      query={graphql`
        query {
          
          allStrapiArticle (filter: {category: {name: {eq: "Récemment paru"}}})  {
            edges {
              node {
                strapiId
                Auteur
                title
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
    </>
  )
}

export default ParuRecement