import React from "react";

const Essential = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg  overflow-hidden p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover rounded-lg"
      />
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-primary mb-2">
          {item.name}
        </h3>
        <p className="text-accent text-sm mb-4">{item.description}</p>
        <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
          {item.category}
        </span>
      </div>
    </div>
  );
};

export default Essential;
