import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import "../fonts/fonts.css"
import LivresComponent from "./livres"

const AParaitre = () => {

  return (

    
    <>
      <StaticQuery
      query={graphql`
        query {
          
          allStrapiArticle (filter: {category: {name: {eq: "A paraître"}}})  {
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
        
  
  <div class="row">
    
        {/* A paraitre */}

      
      <LivresComponent articles={data.allStrapiArticle.edges} />
      {/* <Collections/> */}
      {/* <Category /> */}
       
  </div>
     
      )}
    />   
    </>
  )
}

export default AParaitre

