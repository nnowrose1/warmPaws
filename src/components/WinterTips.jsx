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
    // console.log(tips);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 md:pb-8">
            {
           tips.map(tip => <WinterTip key={tip.tipId} tip={tip}></WinterTip>) 
            }
        </div>
    );
};

export default WinterTips;