import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState({});
    const data = useLoaderData();
    const {id} = useParams();
    console.log(id, data);

    useEffect(() => {
        const details = data.find(service => service.serviceId == id);
        console.log(details);
        setServiceDetails(details);
    }, [data, id])
    
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

  return (
    <div className='container mx-auto bg-orange-100 p-10'>
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-80 object-cover"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold mt-4  text-primary">{serviceName}</h1>
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
            <p className="text-lg font-semibold ">
              Price: ${price}
            </p>
          </div>
        </div>

        <Link to="/services">
          <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-[#162d6a] transition cursor-pointer">
            Back to Our Services
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;