import React, {useState} from "react"
import Evenement from "./evenement"
import Moment from "react-moment"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";


const Evenements = ({ articles }) => {
  const article = articles

  

  return (
       
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
                                    DescriptionDeLevenement
                                }
                            }
                        }
                        allStrapiArticle {
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
                render={(data) => (
                  // <div className="parution-container-enfant" >

                  
                     <Accordion allowMultipleExpanded>
    {data.allStrapiEvenements.edges.map((evenement) => {
      return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                  <Row>
                    <Col sm='3'>
                      <Moment className="pl-1" locale="fr" format="Do MMM YYYY">{evenement.node.dateDeLevenement}</Moment>
                    </Col>
                    <Col sm='6'>
                    {evenement.node.intitule}
                    </Col >
                    <Col sm='3' className='text-align-right'>
                    <div className='d-flex row-reverse'>
                         {evenement.node.Ville}
                      </div>                   
                 
                    </Col>
                  </Row>
              
                 
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <Row>
                    <Col sm='3'>
                    
                    </Col>
                    <Col sm='6'>
                    {evenement.node.DescriptionDeLevenement}
                    </Col >
                    <Col sm='3' className=''>
                      <div>
                    {evenement.node.Adresse}
                       </div>
                       <div>
                         {evenement.node.Horaires}
                       </div>
                    
                   
                   
                    </Col>
                  </Row>
              
            </AccordionItemPanel>
        </AccordionItem>)
})}
</Accordion>
// </div>

                )}  />




          // {article.map((article, i) => {
          //   return (


          //     <div>
          //     <Evenement evenement={article} key={`evenements__${article.node.id}`} />
          //     </div>
          //   )
          // })}
        
    
  )
}

export default Evenements