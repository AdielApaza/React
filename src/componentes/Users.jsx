import React from "react";
import "./Users.css";

const Userdetails = ({ character }) => {
  const changeWordColor = (text, word, color) => {
    let finalColor = color; // Color predeterminado
    // Lógica para determinar el color final basado en alguna condición
    if (character.status === "Alive") {
      finalColor = "green"; // Cambiar a verde si el personaje está vivo
    } else if (character.status === "Dead") {
      finalColor = "red"; // Cambiar a rojo si el personaje está muerto
    } else if (character.status === "unknown") {
      finalColor = "Gold"; // Cambiar a rojo si el personaje está muerto
    } else if (character.status === "Male") {
      finalColor = "Blue"; // Cambiar a rojo si el personaje está muerto
    } else if (character.status === "Female") {
      finalColor = "Pink"; // Cambiar a rojo si el personaje está muerto
    }
    return text.replace(
      new RegExp(`\\b${word}\\b`, 'gi'),
      `<span style="color: ${finalColor}">${word}</span>`
    );
  };
  const changeWordColor1 = (text, word1, color) => {
    let finalColor1 = color; // Color predeterminado
    // Lógica para determinar el color final basado en alguna condición
    if (character.gender === "Male") {
      finalColor1 = "Aqua"; // Cambiar a rojo si el personaje está muerto
    } else if (character.gender === "Female") {
      finalColor1 = "Magenta"; // Cambiar a rojo si el personaje está muerto
    }
    return text.replace(
      new RegExp(`\\b${word1}\\b`, 'gi'),
      `<span style="color: ${finalColor1}">${word1}</span>`
    );
  };
  return (
    <div className="profile-card">
      <img
        className="profile-img"
        src={character.image}
        alt={`avatar de ${character.name}`}
      ></img>
      <h2 className="profile-title"><center>Character :</center>
      {character.name}</h2>
      <h4 className="location"><center>Last location known: </center>{character.location.name}</h4>
      <br/>
      <h4 className="status"><center>Status:</center>
      <span dangerouslySetInnerHTML={{__html: changeWordColor(character.status, character.status, "")}} />
      </h4>
      <br/>
      <h4 className="gender"><center>Gender:</center>
      <span dangerouslySetInnerHTML={{__html: changeWordColor1(character.gender, character.gender, "")}} />
      </h4>
      <br/>
      <h4 className="species"><center>Species: </center>{character.species}</h4>
      <br/>

    </div>
  );
};
export default Userdetails;
