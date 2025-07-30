import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0A0A0A] text-[#D4AF37] px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl  tracking-wide">
        MyLuxurySite
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/profile" className="hover:text-white">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
