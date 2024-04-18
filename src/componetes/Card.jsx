import React from 'react'
import UserDatails from './Characters'
import ButtonSection from './ButtonS'
import "./Card.css"

const card = (props) => {
  const user = props.user;
  const socialLinks=user["social-links"];
  return (
    <div className="cuadro">
      {<UserDatails user={user}/>}
      <ButtonSection socialLinks={socialLinks}/>
    </div>
  )
}

export default card
