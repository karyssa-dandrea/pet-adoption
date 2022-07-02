import React, { useState } from "react";
import { fetchPetsById } from "../../services/pets";
import PetDetails from "../../components/PetDetails/PetDetails";
import Header from "../../components/Header/Header";
import PetList from "../../components/PetDetails/PetList";

export default function Individual(props) {
  const [pet, setPet] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPetsById(id);
      setPet(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h3> Loading..</h3>;
  }

  return (
    <div className="pet-details">
      {pet.name}
      <Header />
      <PetDetails pet={pet} />
    </div>
  );
}
