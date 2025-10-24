import React from "react";

export default function Card({ stay }) {
  return (
    <div className="group hover:bg-[#e77474] dark:hover:bg-gray-700 transition duration-700 rounded-3xl hover:shadow-[0px_0px_12px]">
      <img
        className="rounded-3xl w-full h-[350px] object-cover group-hover:rounded-b-none transition duration-300"
        src={stay.photo}
        alt={stay.title}
      />
      <div className="flex justify-between px-2 py-2 items-center">
        <div className="flex gap-2 items-center">
          {stay.superHost && (
            <span className="text-center border px-2 py-0.5 rounded-2xl group-hover:text-white border-gray-400 group-hover:border-white">
              SUPER HOST
            </span>
          )}
          <p className="text-gray-400 group-hover:text-white">
            {stay.type}
            {stay.beds ? ` · ${stay.beds} beds` : ""}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            className="w-4 h-4 fill-[#eb5757]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.852L19.335 24 12 19.897 4.665 24 6 15.6 0 9.748l8.332-1.73z" />
          </svg>
          <p className="text-gray-700 group-hover:text-white">{stay.rating}</p>
        </div>
      </div>
      <h2 className="px-2 pb-2 text-lg font-medium group-hover:text-white">
        {stay.title}
      </h2>
    </div>
  );
}
