import React, { useEffect, useState } from "react";
import { fetchPets } from "../../services/pets";
import Header from "../../components/Header/Header";
import PetList from "../../components/PetDetails/PetList";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPets();
      setPets(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading..</h3>;
  }

  return (
    <div>
      <Header />
      <PetList pets={pets} />
    </div>
  );
}
