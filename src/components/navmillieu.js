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
  fontSize:'bigger',
  fontWeight:"bold",
  color:'black',
  textTransform: 'uppercase',
}

const Navmillieu = () => (


<ul className="nav bg-white borderGeneral-bottom justify-content-between borderGeneral-top mb-3 pl-3 pr-3 pt-2 ">
  
  <li className="h5" >
  <Link 
  className=" text-dark active border-dark navFont navHover " 
  to="/"
  style={style}
  activeStyle={activeStyle }
  >Actualités
  </Link>
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

  <li className="h5">
  <Link 
  className="text-dark navFont navHover"   
  to="/plusDinfos/"
  style={style}
  activeStyle={activeStyle }
  >Les éditions
    </Link>
  </li>


</ul>  




//   <ul className="nav bg-white borderGeneral-bottom justify-content-between ">
  
//   <li className="nav-item">
//   <Link className="nav-link text-dark active border-dark navFont " to="/agenda/">Actualité</Link>
//   </li>
  
//   <li className="nav-item ">
//   <Link className="nav-link text-dark navFont"   to="/ounoustrouver/">Ou nous trouver?</Link>
//   </li>
 
//   <li class="nav-item">
//   <Link className="nav-link text-dark navFont"  to="/about/">A propos/Contact</Link>
//   </li>

// </ul>  





//   <div>
//     <nav class="navbar navbar-expand-lg navbar-light bg-white borderGeneral-bottom">
//   <a class="navbar-brand" href="#"></a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="/agenda/">Agenda</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link text-dark" href="/ounoustrouver/">Ou nous trouver?</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link text-dark" href="/about/">A propos/Contact</a>
//       </li>

//     </ul>
//   </div>
// </nav> 
//   </div>
)

export default Navmillieu
