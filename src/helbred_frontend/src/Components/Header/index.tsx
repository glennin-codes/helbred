import React, { useState, useEffect } from "react";

const Header = () => {
  const [shadow, setShadow] = useState(false);

  // Add shadow when scrolling
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-teal-500 text-white w-full fixed top-0 left-0 z-50 transition-shadow mt-0 mb-0 ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <nav className="container flex items-center justify-between mx-auto w-full md:w-auto ">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="images/icon.png"
              alt="Icon"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
            />
            <span className="text-2xl font-bold">HelBred</span>
          </a>
        </div>
        <div>
          <button className="bg-white text-teal-500 py-2 px-4 rounded hover:bg-gray-100">
           Connect Wallet
          </button>
         
        </div>
      </nav>
    </header>
  );
};

export default Header;
