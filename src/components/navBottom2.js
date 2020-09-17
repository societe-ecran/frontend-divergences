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
  fontWeight:"bold",
  color:'black',
  textTransform: 'uppercase',
}


const NavBottom = () => (
  
  
  <ul className="nav bg-white borderGeneral-top justify-content-between pt-2 ">
  
  <li className='h5' >
  <Link 
  className="text-dark navFont pl-3 navHover"
  to="" 
  style={style}
  activeStyle={activeStyle }
  >Rechercher
  </Link>
  </li>


  <li className='h5' >
  <Link 
  className="text-dark navFont pl-3 navHover"
  to="/catalogue/" 
  style={style}
  activeStyle={activeStyle }
  >Catalogue
  </Link>
  </li>
  
  <li className='h5' >
  <Link 
  className="text-dark navFont navHover pr-4" 
  to="/ounoustrouver/"
  style={style}
  activeStyle={activeStyle}
  >Où nous trouver?
  </Link>
  </li>
 
</ul>  

)

export default NavBottom