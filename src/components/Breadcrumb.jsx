import React from "react";
import { breadcrumb } from "../assets/images";

export default function Breadcrumb({ page }) {
  return (
    <div
      className="relative h-50 flex items-center justify-center text-white "
      style={{
        backgroundImage: `url(${breadcrumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="block justify-center text-center">
        <h1 className="text-center text-4xl font-bold text-white">{page}</h1>
      <h2 className="relative text-md font-semibold z-10">
        Home / <span className="text-white">{page}</span>
      </h2>
      </div>
      
    </div>
  );
}
