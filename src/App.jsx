import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ContenedorCards from "./components/Contenedor-Cards";
import ModalFiltrar from "./components/modalFiltrar";

export default function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [loading, setLoading] = useState(true);
  // Cargar datos desde data.json
  useEffect(() => {
    setLoading(true);
    axios
      .get("/data.json")
      .then((res) => {
        setData(res.data);
        setFiltered(res.data);
       
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)); 
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFilter = (location, adults, children) => {
    const totalGuests = Number(adults) + Number(children);

    const filtered = data.filter((item) => {

      const locationMatch =
        !location ||
        item.city.toLowerCase().includes(location.toLowerCase()) ||
        item.country.toLowerCase().includes(location.toLowerCase());

    const guestsMatch =
      !totalGuests === 0 || item.maxGuests >= totalGuests;

      return locationMatch && guestsMatch;
    });

    setFiltered(filtered);
    closeModal();
  };

  return (
    <div>
      <Header openModal={openModal} />
      <div className="flex items-center justify-between px-5 lg:px-10 mb-4">
        <h1 className="text-xl font-bold text-[#333] md:text-3xl lg:text-4xl">
          Stays in Finland
        </h1>
        <p className="text-gray-700 font-medium">{filtered.length}+ stays</p>
      </div>

      <ContenedorCards data={filtered} />

      <ModalFiltrar
        isOpen={isModalOpen}
        onClose={closeModal}
        onFilter={handleFilter}
      />
    </div>
  );
}

