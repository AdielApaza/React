import React from 'react'
import "./ButtonS.css"

const ButtonSection = ({socialLinks}) => {
  return (
    <div>
        <div className="botones">
          {
            socialLinks.map(
              socialLink => <button key={socialLink.name}>{socialLink.name}</button>
            )
          }  
        </div>
    </div>
  )
}

export default ButtonS
