import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id, data);

  useEffect(() => {
    const details = data.find((service) => service.serviceId == id);
    // console.log(details);
    setServiceDetails(details);
  }, [data, id]);

  const {
    image,
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    category,
  } = serviceDetails;

  const handleBookService = (e) => {
    e.preventDefault();
    toast.success("🎉 Service booked successfully!");
    e.target.reset();
  }
  return (
    <div className="container mx-auto bg-orange-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-80 object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mt-4  text-primary">
            {serviceName}
          </h1>
          <p className="text-accent">{description}</p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4 text-accent">
            <div>
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Provider:</span> {providerName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {providerEmail}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Rating:</span> ⭐ {rating}
              </p>
              <p>
                <span className="font-semibold">Available Slots:</span>{" "}
                {slotsAvailable}
              </p>
              <p className="text-lg font-semibold ">Price: ${price}</p>
            </div>
          </div>
        <div className="mx-auto bg-orange-100 shadow-md rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Book a Service</h2>
          <form onSubmit={handleBookService}>
            <fieldset className="fieldset">
               <label className="label text-primary">Your Name</label>
              <input
                type="text"
                name="name"
                className="input w-full text-accent"
                placeholder="Name"
                required
              />
              <label className="label text-primary">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full text-accent"
                placeholder="Email"
                required
              />
    

              <button className="btn btn-neutral mt-4 bg-primary rounded-md text-white">
                Book Now
              </button>
            </fieldset>
          </form>
          </div>

          <Link to="/services">
            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-[#162d6a] transition cursor-pointer">
              Back to Our Services
            </button>
          </Link>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ServiceDetails;
