import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#D4AF37] text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MyLuxurySite. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
