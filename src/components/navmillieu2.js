import React from "react"
import "../assets/css/main.css"
import { Link } from "gatsby"
import "../fonts/fonts.css"


const style = {
  color: 'black',
  textDecoration: 'none',
}

const activeStyle = {
  // fontStyle:"italic",
  fontWeight:'bold',
  color:'black',
  textTransform: 'uppercase',
}

const Navmillieu2 = () => (


<ul className="nav bg-white justify-content-between borderGeneral-top pt-2 pl-4 pr-3">
  
  <li className="h5">
  <Link 
  className=" text-dark border-dark navFont navHover" 
  to="/agenda/"
  style={style}
  activeStyle={activeStyle }
  >Actualités</Link>
  </li>
  
  <li className="h5">
  <Link 
  className="text-dark navFont navHover" 
  to="/about/"
  style={style}
  activeStyle={activeStyle }
  >Contact/Newsletter 
  </Link>
  </li>

  <li className="h5" >
  <Link 
  className="text-dark navFont navHover"   
  to="/plusDinfos/"
  style={style}
  activeStyle={activeStyle }
  >Les éditions
  </Link>
  </li>


</ul>  

)

export default Navmillieu2
