import BottomNav from '../BottomNav'
import React, { useEffect, useState } from "react";
import axios from "axios";

  

const Reels = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reels")
      .then(res => setReels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="h-screen overflow-y-scroll bg-red-400 text-white">
      {reels.map(reel => (
        <div key={reel._id} className="h-screen w-full flex items-center justify-center">
          <video 
            className="h-full w-auto max-w-full object-cover"
            src={`http://localhost:5000${reel.videoUrl}`} 
            controls 
            autoPlay 
            loop 
          />
          <p className="absolute bottom-10 left-5 text-xl">{reel.caption}</p>
        </div>
      ))}
      < BottomNav />
    </div>
  );
}

export default Reels;