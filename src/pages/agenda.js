import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import Layout from "../components/layout"
import "../assets/css/main.css"
import EvenementsComponent from "../components/evenements"
import "../fonts/fonts.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


let item=[{article: 'aaaaaaaaa', titre: 'titre'},{article: 'bbbbbbbb', titre: 'titre'},{article: 'bbbbbbbbbb', titre: 'titre'},]
const Agenda = () => {

  return(
  
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
                image {
                  publicURL
                }
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
}

export default Agenda

