import { ArrowBigDownIcon, ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../BottomNav'

const savedData = [
    {
      title: "All posts",
      images: [
        "/images/car.jpg",
        "/images/girl.jpg",
        "/images/lightning.jpg",
        "/images/mountain.jpg",
      ],
    },
    {
      title: "Audio",
      images: [
        "/images/audio1.jpg",
        "/images/audio2.jpg",
        "/images/audio3.jpg",
        "/images/audio4.jpg",
      ],
    },
  ];
const Saved = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4 space-y-6 font-sans">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/ActivitySetting">
          <ArrowLeft />
        </Link>
        <h1 className="text-xl font-semibold">Saved</h1>
        <div className=" text-2xl ">+</div>
      </div>
      <div className="p-4">
     
     
     

      {/* Saved Sections */}
      <div className="grid grid-cols-2 gap-4">
        {savedData.map((section, index) => (
          <div key={index} className="space-y-2">
            <div className="grid grid-cols-2 gap-1 aspect-square">
              {section.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`saved-${i}`}
                  className="w-full h-full object-cover rounded"
                />
              ))}
            </div>
            <p className="text-center font-medium text-sm">{section.title}</p>
          </div>
        ))}
      </div>
    </div>
        < BottomNav />
    </div>
  )
}

export default Saved
