import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import NavTop from "./navTop";
import Seo from "./seo";
import Navmillieu from "../components/navmillieu";
import NavBottom from "../components/navBottom";
import "../fonts/fonts.css";
import AParaitre from "./a paraitre";
import ParuRecement from "./paru recement";
import { Container, Row, Col } from "reactstrap";


const Layout = ({ children }) => {

let aparaitre = "à"

    return (
        <>
            <Seo />

            <NavTop />

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
                        <div class="container-fluid ">
                            <Row>
                                <Col md="6" className="borderGeneral-right borderGeneral-top colonne">
                                   <Row className="">
                                   <h3 class=" pl-3 pb-3 pt-3">
                                        Editions divergences
                                        <br />
                                        3 Rue de l’Asile Popincourt
                                        <br />
                                        75011 Paris
                                        <br />
                                         <br />
                                        contact@editionsdivergences.com
                                        <br />
                                        {/* 06 69 77 08 14
                                        <br /> */}
                                        <div>
                                            <span className="navHover">
                                                <a
                                                    class=" text-dark navFont"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                    href="https://fr-fr.facebook.com/EditionsDivergences/"
                                                >
                                                    Facebook /
                                                </a>
                                            </span>

                                            <span className="textFont navHover">
                                                <a
                                                    class=" text-dark navFont"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                    href="https://www.instagram.com/editionsdivergences/?hl=fr"
                                                >
                                                    {" "}
                                                    Instagram /
                                                </a>
                                            </span>

                                            <span className=" textFont navHover">
                                                <a
                                                    className=" text-dark navFont"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                    href="https://twitter.com/EDivergences?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                                >
                                                    {" "}
                                                    Twitter
                                                </a>
                                            </span>
                                        </div>
                                    </h3>
                                   </Row>
                                    

                                    <Row className="borderGeneral-bottom" >
                                       <Col sm='12'>
                                        <Navmillieu />
                                      </Col>
                                    </Row>
                                 
                                    
                                     <main>{children}</main>
                                  
       
           
                                </Col>

                                <Col md="4" className="borderGeneral-right borderGeneral-top">
                                  
                                    <div className="parution-container-enfant">
                                        
                                   
                                           <h4 className="pl-3 bg-white pt-2 sticky-top">
                                           Parus récemment
                                        </h4>
                                          
                                         <div className='pl-3 pr-3'>
                                            <ParuRecement />
                                         </div>
                                        
                                    </div>
                                    
                                </Col>

                                <Col md="2" className="borderGeneral-top">
                                   
                                    <div className="parution-container-enfant">
                                        <h4 className=" pl-3 bg-white pt-2 sticky-top">
                                             {aparaitre.toUpperCase()} paraître
                                        </h4>
                                        <div className='pl-4'>
                                           <AParaitre  />
                                        </div>
                                      
                                    </div>
                                </Col>
                            </Row>
                            <NavBottom />
                        </div>
                )}
            />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
