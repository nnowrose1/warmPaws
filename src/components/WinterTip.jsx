import React from 'react';

const WinterTip = ({tip}) => {
    return (
        <div
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl  p-5"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-56 object-cover"
            />
            <div >
              <h3 className="text-xl font-semibold text-primary my-2">
                {tip.title}
              </h3>
              <p className="text-accent mb-4 line-clamp-3">{tip.description}</p>
              <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                {tip.category}
              </span>
            </div>
          </div>
    );
};

export default WinterTip;