import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../components/serviceCard';
import WinterTips from '../components/WinterTips';

const Home = () => {
    const services = useLoaderData();
     
    return (
        <div className='bg-orange-100'>
            {/* popular winter care services */}
            <h2 className='font-bold text-4xl text-center text-primary pt-8'>Popular Winter Care Services</h2>
            <div  className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                services.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard> )
            }
            </div>
  {/* Winter tips */}
  <h2 className='font-bold text-4xl text-center text-primary pb-8'>Winter Care Tips for Pets</h2>
  <WinterTips></WinterTips>

        </div>
    );
};

export default Home;