import React, { useState, useEffect } from "react";
import { fetchPetsById, deletePet } from "../../services/pets";
import PetDetails from "../../components/PetDetails/PetDetails";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";

export default function Individual(props) {
  const [pet, setPet] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPetsById(id);
      setPet(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h3> Loading..</h3>;
  }

  const deleteButton = async () => {
    await deletePet(pet.id);
    setMessage("Success!");
    setTimeout(() => {
      history.pushState(`/`);
    }, 2000);
  };

  return (
    <div className="pet-details">
      <Header />
      <PetDetails pet={pet} deleteButton={deleteButton} message={message} />
    </div>
  );
}
