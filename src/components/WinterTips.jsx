import React, { useEffect, useState } from 'react';
import WinterTip from './WinterTip';

const WinterTips = () => {
    const [tips, setTips] = useState([]);
    useEffect(() => {
     fetch('/winterCare.json')
     .then(res => res.json())
     .then(data => setTips(data))
     .catch(error=> {
         console.log(error);
     })
    }, [])
    
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 md:pb-8 ">
            {
           tips.map((tip, index) => <WinterTip index={index} key={tip.tipId} tip={tip}></WinterTip>) 
            }
        </div>
    );
};

export default WinterTips;