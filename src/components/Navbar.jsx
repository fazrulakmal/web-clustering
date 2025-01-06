import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">My Dashboard</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#analytics" className="hover:underline">Analytics</a></li>
          <li><a href="#settings" className="hover:underline">Settings</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
