import React from "react";

export default function PetForm({
  name,
  bio,
  image,
  updatePetState,
  buttonHandler,
  message,
}) {
  return (
    <div className="form">
      <h2>Add Pet Details!</h2>
      <p>{message}</p>
      <div className="pet-form">
        <label>Name:</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            updatePetState("name", e.target.value);
          }}
        />
        <label>Bio:</label>
        <input
          placeholder="bio"
          type="text"
          value={bio}
          onChange={(e) => {
            updatePetState("bio", e.target.value);
          }}
        />
        <label>Image:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => {
            updatePetState("image", e.target.value);
          }}
        />
      </div>
      <div className="button">
        <button onClick={buttonHandler}>Save!</button>
      </div>
    </div>
  );
}
