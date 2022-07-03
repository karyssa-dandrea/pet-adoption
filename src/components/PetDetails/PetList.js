import React from "react";
import { Link } from "react-router-dom";
import "./PetList.css";

export default function PetList({ pets }) {
  return (
    <>
      <div className="pet-list">
        {pets.map((pets) => (
          <Link className="list" key={pets.id} to={`/pets/${pets.id}`}>
            <h1> Meet {pets.name} </h1>
            <img src={pets.image}></img>
          </Link>
        ))}
      </div>
    </>
  );
}
