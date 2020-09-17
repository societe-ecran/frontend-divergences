import React from "react"
import { Link } from "gatsby"
import "../assets/css/main.css"
import Moment from "react-moment"
import 'moment/locale/fr'
import "../fonts/fonts.css"


const Livre = ({ article }) => {
  
  const categorieChoisie = article.node.category.name

  const tailleAffichageLivre = ()=>{
    if(categorieChoisie === "A paraître" ){
        return(
<div class="container">
            <div class="row">
               <div class="col-md-9">
                 <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            className="carteLivre"
            width="350"
            height= "585"
            
               />
        </div>
          <div class="col-md-3 text-dark h5" >
           Le<Moment locale="fr" format="Do MMM YYYY" class="col-md-3 text-dark h5 " > 
           {article.node.DateDeParution}
           </Moment>
          </div>
    </div>
</div>
        )
    }else if (categorieChoisie === "Récemment paru") {
      return(
        <div class="container">
        <div class="row">
               <div class="col-md-12">
        <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            className="carteLivre"
            width="250"
            height= "400"
          />
          </div>
          </div>
          </div>
      )
    } else {
      return (
        <div class="container">
        <div class="row">
               <div class="col-md-12">
        <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            className="carteLivre"
            width="250"
            height= "auto"
          />
          </div>
          </div>
          </div>
      )
    }
  }
  
  return (
    
      
       
        <div class="text-dark pt-3 pb-3 textFont" style={ { textDecoration: 'none' }} >
          <Link to={`/article/${article.node.strapiId}`}  
          activeStyle={{ textDecoration: "none"}} 
          style={{textDecoration:"none"}}>


          {/* <div class="container">
            <div class="row">
               <div class="col-md-4"> */}



            {/* <div class="card-flip shadow">
                <div class="card front"> */}
               
               {tailleAffichageLivre()}
               
                {/* </div> */}
                {/* <div class=" card back text-center text-dark shadow ">
                <span class="container">
                <span class="row pt-2">
                  <span class="col-8 pt-3 border-bottom border-top border-dark textFont">
                    <span class="text-uppercase textFont">{article.node.title}</span>
                      <ReactMarkdown source={article.node.Auteur}/>
                     </span>
                </span>

                <span class="col-12 border-left pb-5 border-dark">
                  Parution le <Moment locale="fr" format="Do MMM YYYY">{article.node.DateDeParution}</Moment>  
                </span>
                 
                  </span>
                

                </div> */}
            {/* </div> */}
     
     
        {/* </div>
    </div>
</div> */}

         
          </Link>
        </div>
        
         

    
  )
}

export default Livre
