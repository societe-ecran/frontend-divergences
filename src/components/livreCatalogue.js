import React from "react"
import { Link } from "gatsby"
import "../assets/css/main.css"
import 'moment/locale/fr'
import "../fonts/fonts.css"

const Livre = ({ article }) => {
  return (
      
          <Link to={`/article/${article.node.strapiId}`}  
          activeStyle={{ textDecoration: "none"}} 
          style={{textDecoration:"none"}}>

          <div class="container justify-content-center d-inline">
                <img   
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            className="carteLivre mt-3 ml-3 mr-3 mb-4"
            height= '480'
            width="290"
            
                />
            </div>
          </Link>
       
  )
}

export default Livre