import { Star } from 'lucide-react';
import React from 'react';

const Vet = ({vet, index}) => {
    return (
        <div data-aos="fade-left"
                    data-aos-delay={index * 200} className="card bg-base-100 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden p-4">
      <img
        src={vet.image}
        alt={vet.name}
        className="h-52 w-full object-cover rounded-lg"
      />

      <div className="space-y-3 mt-3">
        <h2 className="text-xl font-bold text-primary text-center">{vet.name}</h2>
        <div className='flex justify-between items-center'>
        <p className="text-sm text-accent font-semibold">{vet.specialization}</p>

        <div className="flex items-center gap-2">
          <Star className="text-yellow-500" size={18} />
          <p className="text-sm font-semibold text-secondary">{vet.rating}</p>
        </div>
        </div>

        <p className="text-sm text-accent">{vet.description}</p>

        <div className="pt-3">
          <p className="text-sm text-primary">
            <span className="font-semibold ">Experience:</span> {vet.experience}
          </p>
          <p className="text-sm text-primary">
            <span className="font-semibold ">Email:</span> {vet.email}
          </p>
        </div>
      </div>
    </div>
    );
};

export default Vet;