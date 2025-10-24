import React from 'react';
import Vet from './Vet';

const Vets = () => {
     const vets = [
  {
    vetId: 1,
    name: "Dr. Sarah Bennett",
    specialization: "Small Animal Medicine",
    experience: "8 years",
    email: "sarah.bennett@warmpaws.com",
    phone: "+1-202-555-0193",
    rating: 4.9,
    image: "https://i.ibb.co.com/yFKq4D8K/vet2.jpg",
    description:
      "Dr. Bennett specializes in winter pet care and nutrition. She ensures pets stay healthy and active even in cold weather."
  },
  {
    vetId: 2,
    name: "Dr. Michael Carter",
    specialization: "Veterinary Surgery & Rehabilitation",
    experience: "11 years",
    email: "michael.carter@warmpaws.com",
    phone: "+1-202-555-0158",
    rating: 4.8,
    image: "https://i.ibb.co.com/S4WF27v5/vet1.jpg",
    description:
      "An expert in post-injury rehabilitation, Dr. Carter focuses on ensuring pets recover safely during the winter season."
  },
  {
    vetId: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Dermatology & Allergy Care",
    experience: "6 years",
    email: "emily.rodriguez@warmpaws.com",
    phone: "+1-202-555-0124",
    rating: 4.7,
    image: "https://i.ibb.co.com/3mk5dq1M/vet3.jpg",
    description:
      "Dr. Rodriguez helps pets with skin sensitivities and coat issues that worsen in winter, offering tailored treatments for comfort and care."
  }
];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:pb-8">
           
         { 
            vets.map(vet => <Vet key={vet.vetId} vet={vet}></Vet>)
         }   
        </div>
    );
};

export default Vets;
