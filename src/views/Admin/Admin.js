import React, { useState } from "react";
import PetForm from "../../components/Form/PetForm";
import Header from "../../components/Header/Header";
import { insertPet } from "../../services/pets";

export default function Admin() {
  const [pet, setPet] = useState({});
  const [message, setMessage] = useState("");

  const buttonHandler = async () => {
    try {
      await insertPet(pet);
      setPet({});
      setMessage("Success!");
    } catch {
      setMessage("Something went wrong.");
    }
  };

  const updatePetState = (key, value) => {
    pet[key] = value;
    setPet({ ...pet });
  };

  return (
    <div className="admin">
      <Header />
      <PetForm
        {...pet}
        buttonHandler={buttonHandler}
        updatePetState={updatePetState}
        message={message}
      />
    </div>
  );
}
