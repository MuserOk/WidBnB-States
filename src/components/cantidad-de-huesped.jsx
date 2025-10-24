import React from "react";
import { useState } from "react";

export default function CantidadDeHuesped({adults, setAdults, children, setChildren}) {

  const totalGuests = adults + children;
  const guestText = totalGuests > 0 ? `${totalGuests} Guests` : "Add guests";

  return (
    <div>

      <div className="flex flex-col gap-1">
        <div>
          <span className="font-medium text-xs sm:text-md dark:text-white">Adults</span>
          <div className="text-gray-400 mb-1 text-xs">Ages 13 or above</div>
          <div className="flex gap-3 items-center">
            <button onClick={() => setAdults(Math.max(0, adults - 1))} className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
            <span className="dark:text-white">{adults}</span>
            <button onClick={() => setAdults(adults + 1)} className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
          </div>
        </div>

        <div>
          <span className="font-medium  text-xs sm:text-md dark:text-white ">Children</span>
          <div className="text-gray-400  text-xs mb- 1">Ages 2 – 12 </div>
          <div className="flex gap-3 items-center">
            <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
            <span className="dark:text-white">{children}</span>
            <button onClick={() => setChildren(children + 1)} className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
