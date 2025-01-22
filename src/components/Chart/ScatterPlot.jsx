import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";

// Register required Chart.js components
ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

const ScatterPlot = () => {
  const [chartData, setChartData] = useState(null);

  // Fetch clustering data from the backend
  useEffect(() => {
    fetch("/api/datapelanggan/kmeans_clustering") // Replace with your backend endpoint
      .then((response) => response.json())
      .then((data) => {
        // Prepare data for the scatter plot
        const indibizData = data.Clustered_Customers.filter(
          (item) => item.cluster === "IndiBiz"
        ).map((item) => ({
          x: item.jumlah_pengguna,
          y: item.penggunaan_data_per_bulan,
        }));

        const indihomeData = data.Clustered_Customers.filter(
          (item) => item.cluster === "IndiHome"
        ).map((item) => ({
          x: item.jumlah_pengguna,
          y: item.penggunaan_data_per_bulan,
        }));

        setChartData({
          datasets: [
            {
              label: "IndiBiz",
              data: indibizData,
              backgroundColor: "rgba(54, 162, 235, 0.7)",
            },
            {
              label: "IndiHome",
              data: indihomeData,
              backgroundColor: "rgba(255, 99, 132, 0.7)",
            },
          ],
        });
      })
      .catch((err) => console.error("Error fetching clustering data:", err));
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  return (
    <div style={{ width: "75%" ,height: "75%", margin: "auto",textAlign: "center" }}>
      <h2 className="text-2xl font-bold mb-4">Diagram Pelanggan Berdasarkan Penggunaan Data</h2>
      <Scatter
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "Jumlah Pengguna",
              },
            },
            y: {
              title: {
                display: true,
                text: "Penggunaan Data per Bulan (GB)",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ScatterPlot;
