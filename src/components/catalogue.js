import React from "react"
import Livre from "./livreCatalogue"


const Livres = ({ articles }) => {
  const article = articles
  
  return (
      <div>
          {article.map((livre, i) => {
            return (
              <Livre article={livre} key={`evenement__${livre.node.id}`} />
            )
          })}
        </div> 
  )
}

export default Livres
