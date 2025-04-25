import React from "react";
import { Home, Search, PlusSquare, Video } from "lucide-react"; // Icons from lucide-react
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed -bottom-0.5 left-0 w-full bg-white shadow-lg py-1.5 flex justify-around items-center">
      {/* Home Icon */}
      <Link to='/OpenHomePage'><Home className="w-7 h-7 text-black cursor-pointer" /></Link>

      {/* Search Icon */}
      <Link to='/Scarch'><Search className="w-7 h-7 text-black cursor-pointer" /></Link>

      {/* Add Icon */}
      <Link to='/PlaySquare'><PlusSquare className="w-7 h-7 text-black cursor-pointer" /></Link>

      {/* Reels Icon */}
      <Link to='/Reels'><Video className="w-7 h-7 text-black cursor-pointer" /></Link>

      {/* Profile Icon (Using an Image) */}
      <Link to='/Profile'><img
        src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
        alt="Profile"
        className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
      /></Link>
    </div>
  );
};

export default BottomNav;
