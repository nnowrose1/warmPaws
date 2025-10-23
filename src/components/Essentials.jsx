import React from 'react';
import Essential from './Essential';

const Essentials = () => {
    const petFavourites = [
  {
    id: 1,
    name: "Tasty Treats",
    description:
      "Pets love flavorful snacks that reward their good behavior and make training fun.",
    image: "https://i.ibb.co.com/MxR36mnb/fav.jpg",
    category: "Food"
  },
  {
    id: 2,
    name: "Warm Beds",
    description:
      "A cozy, soft bed keeps pets comfortable and happy, especially during winter nights.",
    image: "https://i.ibb.co.com/HTzBcTFN/pet7.jpg",
    category: "Comfort"
  },
  {
    id: 3,
    name: "Squeaky Toys",
    description:
      "Squeaky toys engage pets' playful instincts and help reduce boredom and anxiety.",
    image: "https://i.ibb.co.com/G3Jcp6MX/fav2.jpg",
    category: "Toys"
  },
  {
    id: 4,
    name: "Outdoor Walks",
    description:
      "Nothing excites pets more than exploring outside — fresh air, new smells, and happy tails!",
    image: "https://i.ibb.co.com/Lzk8g9Y0/pet1.jpg",
    category: "Activities"
  },
  {
    id: 5,
    name: "Tummy Rubs",
    description:
      "Gentle belly rubs are a universal language of love for pets — instant happiness guaranteed.",
    image: "https://i.ibb.co.com/nNY05wxM/fav3.jpg",
    category: "Affection"
  },
  {
    id: 6,
    name: "Soft Blankets",
    description:
      "Pets adore snuggling into soft, warm blankets that give them comfort and security.",
    image: "https://i.ibb.co.com/Nn1T690s/pet4.jpg",
    category: "Comfort"
  }
];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 md:pb-8">
            {
                petFavourites.map(item => <Essential key={item.id} item={item}></Essential>)
            }
            
        </div>
    );
};

export default Essentials;