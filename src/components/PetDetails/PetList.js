import React from "react";
import { Link } from "react-router-dom";

export default function PetList({ pets }) {
  return (
    <>
      <div className="pet-list">
        {pets.map((pets) => (
          <Link className="list" key={pets.id} to={`/pets/${pets.id}`}>
            {pets.name}
          </Link>
        ))}
      </div>
    </>
  );
}
