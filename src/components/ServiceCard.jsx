import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    
    return (
       <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl p-4"
        >
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-52 object-cover rounded-lg"
          />

          <div>
            <h2 className="text-xl font-semibold text-primary my-2">
              {service.serviceName}
            </h2>
     <div className='flex justify-between items-center mb-4'>
            <p className="text-gray-600">
              <span className="font-medium text-yellow-600">⭐</span>{" "}
              {service.rating}
            </p>

            <p className="text-lg font-semibold text-[#b89b5e] ">
              ${service.price}
            </p>
            </div>

            <Link to={`/services/${service.serviceId}`}> <button className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-[#162d6a] transition ">View Details</button>
              
            </Link>
          </div>
        </div>
    );
};

export default ServiceCard;