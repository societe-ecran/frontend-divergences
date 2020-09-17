import React from "react"
import "../assets/css/main.css"
import "../fonts/fonts.css"
import { Link } from "gatsby"
import "../images/panier.png"
import Panier from "./panier"

const NavTop = () => (

<ul class="nav bg-white borderGeneral-bottom justify-content-between sticky-top shadowBar ">
  
  <li >
  <Link className="text-dark font-weight-bold logoDivergences  ml-4  pt-5 navfont" 
  style={{textDecoration:"none"}}
  activeStyle={{ textDecoration: "none"}}
  to="/">EDITIONS DIVERGENCES 
  </Link>
  </li>
  
  <li class="navFont pt-1">
  <Link className=" text-dark navFont logoDivergences2" 
  style={{textDecoration:"none"}}
  activeStyle={{ textDecoration: "none"}}
  to="/">Critique sociale et politique</Link>
  </li>

 
  <li className="pr-4 pt-1">
  <button className="snipcart-checkout panier" ><Panier/></button>
  </li>
  
 
</ul>  




//   <div >
//     <nav class="navbar navbar-expand-lg navbar-light bg-white borderGeneral-bottom text-dark">
  
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav ">
//       <li class="nav-item">
//       <a class="nav-link text-dark logoDivergences" href="/">EDITIONS DIVERGENCES</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link navFont" href="/">critique sociale et politique</a>
//       </li>
//       <li class="nav-item ">
//         <a class="nav-link text-dark navFont " href="https://www.instagram.com/editionsdivergences/?hl=fr">INSTA</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link text-dark navFont" href="https://fr-fr.facebook.com/EditionsDivergences/">FB</a>
//       </li>

//     </ul>
//   </div>
// </nav>
 
 

//   </div>
)

export default NavTop
