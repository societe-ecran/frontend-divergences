import React from "react"
import Evenement from "./evenement"

const Evenements = ({ articles }) => {

  const article = articles
  

  return (
        <div>
          {article.map((article, i) => {
            return (
              <div>
              <Evenement evenement={article} key={`evenements__${article.node.id}`} />
              </div>
            )
          })}
        </div>
    
  )
}

export default Evenements