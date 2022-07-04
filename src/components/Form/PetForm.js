import React from "react";

export default function PetForm({ name, bio, image }) {
  return (
    <div className="form">
      <h2>Add Pet Details!</h2>
      <label>Name:</label>
      <input
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => {
          updatePetState("name", e.target.value);
        }}
      />
    </div>
  );
}
