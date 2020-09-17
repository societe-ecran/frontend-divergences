import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import Layout from "../components/layout"
import "../assets/css/main.css"
import "../fonts/fonts.css"

const plusDinfo = () => (
  
  
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
        
  <div class="container-fluid enlever-scroll-bar-firefox -webkit-scrollbar">
  <div>

      <p cloass="text-justify textFont">
  Un livre c’est une succession de choses : un texte bien sûr mais c’est aussi des choix
graphiques, un papier plutôt qu’un autre, un imprimeur, un réseau de diffusion et de
distribution, et c’est le désir d’une multitude de libraires de le faire vivre ou non. Toutes
ces choses ont un coût dans un monde médié par l’argent et le livre a un prix, à l’éditeur de faire en sorte qu’il soit le moins prohibitif possible.<br/>
Si le livre est bien une marchandise, il se doit de dépasser cette pauvre condition de
base pour « risquer [...] le court-circuit d’une rencontre, tenter un contact qui ne soit
pas une médiation marchande, une reconnaissance qui soit stratégique et non spectatrice. » (La Cassure, 2017)<br/>
Chaque livre que l’on publie répond à un désir ou à une nécessité : saisir un peu
mieux tel aspect de notre société, intervenir dans une situation politique concrète,
éclairer tel aspect de notre histoire.<br/>
Créer une maison d’édition c’est donc se donner la force de participer à la production et à la nécessaire circulation d’une intelligence critique sur ce monde et ses effets.
C’est placer un nouveau pion du bon côté de l’échiquier, un pion dont les capacités de
mouvement sont forcément limitées mais un pion de plus, quand même.
 </p>

{/* <div className="text-center textFont">
 <span className="text-center mt-4 mb-2 textFont">
Suivez nous sur les réseaux sociaux :</span> <br/>

<span className="text-center  textFont navHover" >
<a 
class=" text-dark navFont" 
style={{textDecoration:"none"}}
href="https://fr-fr.facebook.com/EditionsDivergences/"
>FACEBOOK
</a>
<br/>
</span>

<span className="text-center  textFont navHover">
<a 
class=" text-dark navFont" 
style={{textDecoration:"none"}}
href="https://www.instagram.com/editionsdivergences/?hl=fr"
>INSTAGRAM
</a> 
<br/>
</span>

<span className="text-center textFont navHover" >
<a 
class=" text-dark navFont" 
style={{textDecoration:"none"}}
href="https://twitter.com/EDivergences?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
>TWITTER
</a> 
<br/>
</span>

</div> */}

<p className="text-left mt-3 textFont">
Diffusion : Hobo Diffusion /Distribution : Makassar <br/>
Éditions Divergences © juin 2020  <br/>   
</p>


  </div>
</div>
          
        
      )}
    />
    
  </Layout>
)

export default plusDinfo



