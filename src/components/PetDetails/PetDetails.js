import React from "react";
import { Link } from "react-router-dom";
import "./PetList.css";

export default function PetDetails({ pet, deleteButton, message }) {
  return (
    <div className="pet-details">
      <h1>{pet.name}</h1>
      <p>{message}</p>
      <p>{pet.bio}</p>
      <img src={pet.image}></img>

      <Link key={pet.id} to={`/pets/${pet.id}/edit`}>
        Edit this cutie!
      </Link>

      <button onClick={deleteButton}>Delete Me!</button>
    </div>
  );
}
