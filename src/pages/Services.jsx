import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../components/serviceCard';

const Services = () => {
   const services = useLoaderData();
        
    return (
        <div className='bg-orange-100'>
            <h2  data-aos="fade-up"
        data-aos-delay="0" className='font-bold text-4xl text-center text-primary pt-8'>Our Pet Care Services</h2>
            <div  className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                services.map((service, index) => <ServiceCard index={index} key={service.serviceId} service={service}></ServiceCard> )
            }
            </div>
        </div>
    );
};

export default Services;