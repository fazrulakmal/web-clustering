import React from "react";
import Navbar from "../components/Navbar";
import ScatterPlot from "../components/Chart/ScatterPlot";

const Dashboard = () => {
  return (
    <div className="fixed-top h-screen bg-gradient-to-r from-blue-50 to-indigo-50 tewxt-white">
        <Navbar/>
      <div className="mt-3 rounded-lg shadow-lg p-4 w-full gap-4">
        <div className="bg-white p-4 shadow-md rounded-md">
        <ScatterPlot/>
        </div>
        </div>
      </div>
  );
};

export default Dashboard;
