import React, { useState, useEffect } from "react";
import axios from "axios";
import CantidadDeHuesped from "./cantidad-de-huesped";

export default function ModalFiltrar({ isOpen, onClose, onFilter }) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        const unique = [...new Set(res.data.map((s) => `${s.city}, ${s.country}`))];
        setLocations(unique);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!isOpen) return null;

  const totalGuests = adults + children;
  const guestText = totalGuests > 0 ? `${totalGuests} Guests` : "Add guests";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50">
      <div
        className="flex absolute top-0 left-0 inset-0 z-10 flex-col gap-2  items-start h-[80%] mb-[20%] bg-white dark:bg-gray-700 border-b-2 border-gray-800/10 lg:h-[60%] transition-transform"
        tabIndex="-1"
        aria-labelledby="drawer-top-label"
      >
        {/* Header móvil */}
        <div className="lg:hidden flex justify-between pr-8 pl-4 mt-2 items-center w-full">
          <h2 className="font-medium dark:text-gray-100">Edit your search</h2>
          <button
            onClick={onClose}
            className="text-2xl font-medium hover:bg-[#eb5757] py-1 px-3 hover:text-white hover:rounded-sm active:rounded-sm dark:text-white active:bg-[#f02f2f]"
          >
            X
          </button>
        </div>

        {/* Contenedor principal */}
        <div className="lg:relative m-auto rounded-2xl border-1 border-gray-100/50 dark:bg-gray-800/20 shadow-md w-[90%] h-30 dark:shadow-gray-500 dark:shadow-[0px_1px_6px] flex flex-col lg:items-center lg:flex-row lg:mt-20">
          {/* Ubicación */}
          <div className="border-b-[0.125px] lg:border-0 border-gray-50/50 w-full lg:w-[42%] px-6 pt-3 pb-2 lg:pb-3 lg:pt-2 flex flex-col">
            <label className="font-medium text-xs dark:text-gray-50">LOCATION</label>
            <select
              className="border-none text-gray-500 text-lg outline-none focus:outline-none focus:ring-0"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select location</option>
              {locations.map((loc, i) => (
                <option key={i}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Invitados */}
          <button className="cursor-pointer w-full px-6 pt-2 pb-3 flex-col text-start lg:w-[20%] dark:hover:bg-gray-800/40 dark:active:bg-gray-800 hover:rounded-b-2xl">
            <p className="text-start font-medium text-xs dark:text-gray-50">GUESTS</p>
            <input
              type="text"
              className="text-start text-gray-500 text-lg border-none outline-none focus:outline-none focus:ring-0"
              placeholder="Add guests"
              value={guestText}
              readOnly
            />
          </button>
        </div>

        {/* Cantidad de huéspedes */}
        <div className="px-10">
          <CantidadDeHuesped
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
          />
        </div>

        {/* Botón de búsqueda */}
        <button
          onClick={() => onFilter(selectedLocation, adults, children)}
          className="md:absolute  lg:right-30 lg:top-23 lg:translate-x-0 lg:left-auto left-1/2 -translate-x-1/2 bottom-0 lg:bottom-auto cursor-pointer m-auto px-6 py-2 bg-[#eb5757] active:bg-[#f02f2f] rounded-2xl flex justify-center items-center gap-4 text-white mb-6 dark:shadow-[#ed9797] dark:shadow-[0px_0px_2px]"
        >
          <img className="w-[2rem] pl-2" src="/public/images/search.svg" alt="search" />
          <p>Search</p>
        </button>
      </div>
    </div>
  );
}
