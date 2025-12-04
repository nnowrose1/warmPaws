import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../components/serviceCard";

const Services = () => {
  const services = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  // Extract unique categories from services
  const categories = [...new Set(services.map((s) => s.category))];

  // Filter services based on search input and sort and category
  const filteredServices = services
    .filter((service) =>
      service?.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((service) =>
      category ? service.category === category : true)
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-orange-50">
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="font-bold text-4xl text-center text-primary pt-8"
      >
        Our Pet Care Services
      </h2>

      {/* Search Bar */}

      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4 mt-6 mb-4">
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white shadow-sm"
          />
       </div>
      

      {/* Sort */}
      <select
        className="p-2 border-secondary rounded-lg"
        
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

       {/* Category Filter */}
        <select
          className="p-3 border rounded-lg bg-white shadow-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

      </div>

      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <ServiceCard
              index={index}
              key={service.serviceId}
              service={service}
            ></ServiceCard>
          ))
        ) : (
          <p className="text-center text-primary text-xl font-bold col-span-full">
            No services found. Try another keyword.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
