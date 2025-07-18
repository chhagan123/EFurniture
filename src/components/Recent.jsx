
import React from "react";
const recent = [
  { id: 1, image: "/mat1.png", alt: "Onyx" },
  { id: 2, image: "/mat2.png", alt: "Royal Memory" },
  { id: 3, image: "/mat3.png", alt: "Pearl" }
]
export const Recent = () => {
  return (
    <div className="w-full px-4 md:px-8 mt-10 mb-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Recent Mattresses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {recent.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[300px] flex flex-col items-center overflow-hidden bg-gray-100 rounded-xl shadow-md p-4" // Added p-4 for padding
          >
            <div className="w-full h-[200px] flex items-center justify-center overflow-hidden rounded-md"> {/* Container for image */}
              <img
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Display the name (alt text) below the image */}
            <p className="mt-3 text-lg font-medium text-gray-800">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


