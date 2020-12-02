import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"
import 'moment/locale/fr'
import "../fonts/fonts.css"



const Evenement = ({ evenement }) => {

  let item=[{article: 'aaaaaaaaa', titre: 'titre'},{article: 'bbbbbbbb', titre: 'titre'},{article: 'bbbbbbbbbb', titre: 'titre'},]
  return (

    <div>
    <Link 
    style={{textDecoration:"none"}} 
    to={`/evenements/${evenement.node.strapiId}`}
    className="navHover" >

        <div class="d-flex justify-content-around text-dark navFont">
        <Moment class="pl-3" locale="fr" format="Do MMM YYYY">{evenement.node.dateDeLevenement}</Moment> 
            <span class= "mx-auto">
              {evenement.node.intitule} 
            </span>
            <span class="pr-3">
              {evenement.node.Ville} 
            </span>
        </div>
      
    </Link>

</div>
  )
}

export default Evenement