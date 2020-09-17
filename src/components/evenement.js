import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"
import 'moment/locale/fr'
import "../fonts/fonts.css"

const Evenement = ({ evenement }) => {
  return (
    <Link 
    style={{textDecoration:"none"}} 
    to={`/evenements/${evenement.node.strapiId}`}
    className="navHover" >
      
    {/* <div class='container d-flex justify-content'>
      <div classname='row '>
          <span className='pr-5'>
          <Moment class="pl-3" locale="fr" format="Do MMM YYYY" className='text-dark navFont'>{evenement.node.dateDeLevenement}</Moment> 
          </span>
          <span className=' pr-5 text-dark navFont'>
          {evenement.node.intitule} 
          </span>
          <span className=' text-dark navFont'>
          {evenement.node.Ville}
          </span>
      </div>
    </div> */}

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
  )
}

export default Evenement