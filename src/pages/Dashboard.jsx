import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="p-4">
        <Navbar/>
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
      <p className="text-gray-700">
        This is a simple dashboard page. You can add charts, analytics, or other features here.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="font-bold">Card 1</h3>
          <p>Details about Card 1</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="font-bold">Card 2</h3>
          <p>Details about Card 2</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="font-bold">Card 3</h3>
          <p>Details about Card 3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
