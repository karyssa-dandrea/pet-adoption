import React from "react";
import { Link } from "react-router-dom";

export default function PetDetails({ pet }) {
  return (
    <div className="pet-details">
      <h1>{pet.name}</h1>
      <p>{pet.bio}</p>
      <img src={pet.image}></img>
    </div>
  );
}
