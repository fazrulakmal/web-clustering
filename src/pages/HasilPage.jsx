import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
// import Helmet from 'react-helmet'
// import Sidebar from '../components/Sidebar';

const HasilPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/datapelanggan/kmeans_clustering')
      .then(response => response.json())
      .then(data => {
        setData(data.Clustered_Customers);
        console.log(data.Clustered_Customers)
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="fixed-top min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>
      <div className="container mx-auto px-4 py-8 justify-between">
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => window.history.back()}>
        Kembali
      </button>
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-700 mb-4">Prospek Pelanggan Baru</h1>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
        </div>

        {/* Filters Section - Horizontal Layout */}

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-16">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 text-left font-semibold">No</th>
                  <th className="py-4 px-6 text-left font-semibold">Nama Penginapan</th>
                  <th className="py-4 px-6 text-left font-semibold">Jumlah Pengguna</th>
                  <th className="py-4 px-6 text-left font-semibold">Penggunaan Data (Bulanan)</th>
                  <th className="py-4 px-6 text-left font-semibold">Penghasilan (Bulanan)</th>
                  <th className="py-4 px-6 text-left font-semibold">Rekomendasi Produk</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr key={index} 
                      className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6 font-medium text-blue-600">{item.nama_penginapan}</td>
                    <td className="py-3 px-6">{item.jumlah_pengguna}</td>
                    <td className="py-3 px-6">{item.penggunaan_data_per_bulan}</td>
                    <td className="py-3 px-6">{item.penghasilan_per_bulan}</td>
                    <td className="py-3 px-6">{item.cluster}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HasilPage;