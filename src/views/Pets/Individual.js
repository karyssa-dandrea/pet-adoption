import React, { useState, useEffect } from "react";
import { fetchPetsById } from "../../services/pets";
import PetDetails from "../../components/PetDetails/PetDetails";
import Header from "../../components/Header/Header";

export default function Individual(props) {
  const [pet, setPet] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

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

  return (
    <div className="pet-details">
      <Header />
      <PetDetails pet={pet} />
    </div>
  );
}
