import React from "react"
import { Link } from "gatsby"
import "../assets/css/main.css"
import Moment from "react-moment"
import 'moment/locale/fr'
import "../fonts/fonts.css"
import { Container, Row, Col } from "reactstrap";

const Livre = ({ article }) => {
  
  const categorieChoisie = article.node.category.name

  const tailleAffichageLivre = ()=>{
    if(categorieChoisie === "Récemment paru" ){
        return(
<div className="pb-2 pt-2 borderGeneral-bottom ">
            {/* <div class="row "> */}
               {/* <div class="col-md-9"> */}
                 <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            width="335"
            height= "565"
            
               />
        {/* </div> */}
          {/* <div class="col-md-3 text-dark h5" >
           Le<Moment locale="fr" format="Do MMM YYYY" class="col-md-3 text-dark h5 " > 
           {article.node.DateDeParution}
           </Moment>
          </div> */}
    {/* </div> */}
</div>
        )
    } else if (categorieChoisie === "A paraître") {
      return(
        <Container className= "borderGeneral-bottom ">
        <div className="pb-2 pt-2">
        {/* <div class="row">
               <div class="col-md-12"> */}
        <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            width="220"
            height= "360"
          />
          {/* </div>
          </div> */}
          </div>
          </Container>
      )
    } else {
      return (
        <div class="container">
        <div class="row">
               <div class="col-md-12">
        <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            // className="carteLivre"
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
    
      
       
        <div class="text-dark textFont" style={ { textDecoration: 'none' }} >
          <Link to={`/article/${article.node.strapiId}`}  
          activeStyle={{ textDecoration: "none"}} 
          style={{textDecoration:"none"}}>

               {tailleAffichageLivre()}
               
          </Link>
        </div>
        
         

    
  )
}

export default Livre
