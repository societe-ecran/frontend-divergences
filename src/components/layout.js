import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, } from "gatsby"
import NavTop from "./navTop"
import Seo from "./seo"
import Navmillieu from "../components/navmillieu"
import NavBottom from "../components/navBottom"
import "../fonts/fonts.css"
import AParaitre from "./a paraitre"
import ParuRecement from "./paru recement"

const Layout = ({ children }) => {



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
      render={data => (
        
  <div class="container-fluid enlever-scroll-bar-firefox -webkit-scrollbar">
  <div class="row">
    
    {/* Presentation */}
    <div class="col-md-6 borderGeneral-right pl-0 pr-0">
      
      <h3 class=" pl-3 pb-3 pt-3">
      Editions divergences<br/>
      12 Rue Moreau<br/>
      75012 Paris<br/>
      - <br/>
      contact@editionsdivergences.com<br/>
      06 69 77 08 14<br/>

      <div>
 

<span className="navHover" >
<a 
class=" text-dark navFont" 
style={{textDecoration:"none"}}
href="https://fr-fr.facebook.com/EditionsDivergences/"
>Facebook /
</a>

</span>

<span className="textFont navHover">
<a 
class=" text-dark navFont" 
style={{textDecoration:"none"}}
href="https://www.instagram.com/editionsdivergences/?hl=fr"
> Instagram /
</a> 
</span>

<span className=" textFont navHover" >
<a 
class=" text-dark navFont" 
style={{textDecoration:"none"}}
href="https://twitter.com/EDivergences?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
> Twitter
</a> 
</span>

</div>

    </h3>

    

    {/* Barre de nav millieu */}
    <Navmillieu/>

    {/* Agenda */}
    
    <div class="agenda-container-parent">
    <div class="agenda-container-enfant">
    <main>{children}</main>
    </div>
    </div>
    </div>

        {/* A paraitre */}

    <div class="col-md-4 borderGeneral-right" >
    <div class="parution-container-parent">
    <div class="parution-container-enfant" >
      <h4 class= "bg-white pt-3" >A paraître</h4>
      <AParaitre/>
      </div>
      </div>
      </div>

          {/* Paru récemment */}
    <div class="col-md-2">
      <div class="parution-container-parent">
      <div class="parution-container-enfant" >
    <h4 class= " bg-white pt-3" >Parus récemment</h4>
      <ParuRecement/>
      </div>
</div>
  </div>
  </div>
  <NavBottom/>
</div>
          


        
      )}
    />
      


      
    </>
  )


}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
