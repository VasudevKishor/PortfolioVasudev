// === Navbar.jsx ===
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = ["hero", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">MyPortfolio</div>
        <div className="space-x-4 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="capitalize text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors cursor-pointer font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;