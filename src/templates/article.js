import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import 'moment/locale/fr'
import "../assets/css/fontawesome-free-5.13.1-web/css/all.css"
import Layout2 from "../components/layout2"

const style = {
  color: 'black',
  fontWeight:"bold",
}



export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      DateDeParution(locale: "fr")
      Auteur
      prix
      StripePriceProduct
      RevueDePresse
      image {
        publicURL
      }
    }
    allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
  }
`


const Livre = ({ data }) => {
  const article = data.strapiArticle

  const revue = article.RevueDePresse

  const affichageRevuePress= () =>{ 
  if(revue != null){
    return (<div>
      <p>_______________</p>
     <p style={style} >Revue de presse</p> 
    <ReactMarkdown source = {article.RevueDePresse}/>
    </div>
    )
  }
  }
  


   

  return (
    <Layout2>

<div class="container-fluid pt-3">
  <div class="row">
    

    <div class="col-sm-3 d-flex align-items-start">
    <Link 
    className="fas h3 fa-arrow-left text-dark mr-3" 
    to="/catalogue/"
    style={{textDecoration:"none"}}
    >
    </Link>
    <img class="carteLivre noHover"
    src={article.image.publicURL}
    srcset={article.image.publicURL}
    alt="" 
    width="290"
    />
    </div>

   
    <div class="col-sm-3 ">
    <h4 style={style} className="text-uppercase text-left textFont mb-5">
    {article.title} <br/>
    {article.Auteur} 
    </h4> 


    

<div class="mt-5 h5" >
    Paru le <Moment locale="fr" format="Do MMM YYYY">{article.DateDeParution}</Moment>   
    <p>
            {article.prix} euros 
            </p>
            
            <button
                class="snipcart-add-item bouton9 pl-2 pr-2 textFont h5"
                data-item-id={article.strapiId}
                data-item-price={article.prix}
                data-item-image={article.image.publicURL}
                data-item-url="/"
                data-item-name={article.title}
               >
              Commander
            </button>
    </div>



    </div>



    <div class="col-sm-6 textFont h5">
    <ReactMarkdown source={article.content} />
    

    <div>
     {affichageRevuePress()}
    </div>

    </div>


    
    

  </div>
</div>

        
    </Layout2>
  )
}

export default Livre
