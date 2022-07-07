import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PetForm from "../../components/Form/PetForm";
import Header from "../../components/Header/Header";
import { fetchPetsById, updatePet, deletePet } from "../../services/pets";

export default function Edit() {
  const [pet, setPet] = useState({});
  const [message, setMessage] = useState("");

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPetsById(params.id);
      setPet(resp);
      console.log(pet);
    };
    fetchData();
  }, [params.id]);

  const buttonHandler = async () => {
    try {
      await updatePet(params.id, pet);
      setMessage("Success!");
    } catch {
      setMessage("Something went wrong.");
    }
  };

  const updatePetState = (key, value) => {
    pet[key] = value;
    setPet({ ...pet });
  };

  const deleteButton = async () => {
    await deletePet(pet.id);
  };

  return (
    <div>
      <h1> Edit Pet:</h1>
      <Header />
      <PetForm
        {...pet}
        updatePetState={updatePetState}
        deleteButton={deleteButton}
        message={message}
        buttonHandler={buttonHandler}
      />
    </div>
  );
}
