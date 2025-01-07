// import { useState, useEffect } from 'react';
// // import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import Swal from 'sweetalert2';

import Navbar from "../components/Navbar";

const InputData = () => {
    const [customerData, setCustomerData] = useState([{name: '', email: '', stage: '', comments: '' }]);
    const [databaseData, setDatabaseData] = useState([]); // State untuk data dari database

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newSalesData = [...salesData];
        newSalesData[index][name] = value;
        setSalesData(newSalesData);
    };

    const handleAddRow = () => {
        setSalesData([...salesData, { name: '', email: '', stage: '', comments: '' }]);
    };

    const handleRemoveRow = (index) => {
        const newSalesData = salesData.filter((_, i) => i !== index);
        setSalesData(newSalesData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents page reload on form submission
        try {
            // Sending data to the backend API using Axios
            const response = await axios.post('/api/sales-input', salesData, {
                headers: { 'Content-Type': 'application/json' },
            });
            
            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Data Berhasil disimpan!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                setSalesData([{ name: '', email: '', stage: '', comments: '' }]); // Clear form
                fetchDatabaseData(); // Refresh table with updated data
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Data gagal disimpan!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while saving the data.");
        }
    };
    

    const fetchDatabaseData = async () => {
        try {
            const response = await axios.get('/api/sales-input');
            setDatabaseData(response.data); // Simpan data dari database ke state
        } catch (error) {
            console.error("Error saat mengambil data dari database:", error);
        }
    };

    useEffect(() => {
        fetchDatabaseData();
    }, []);

    return (
        <div className="fixed-top min-h-screen bg-gradient-to-b text-white from-blue-50 to-white">
            <Navbar/>
            {/* <Sidebar role={role} isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-left mb-10">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">Input Data</h1>
                </div>
                <form onSubmit={''}>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border bg-light text-white rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-800 text-sm md:text-base">
                                    <th className="p-2 border">Nama</th>
                                    <th className="p-2 border">Email</th>
                                    <th className="p-2 border">Tahap</th>
                                    <th className="p-2 border">Komentar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesData.map((row, index) => (
                                    <tr key={''} className="text-sm md:text-base">
                                        <td className="p-2 border">
                                            <input
                                                type="text"
                                                name="name"
                                                value={row.name}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1 text-black"
                                                required
                                            />
                                        </td>
                                        <td className="p-2 border">
                                            <input
                                                type="email"
                                                name="email"
                                                value={row.email}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1 text-black"
                                                required
                                            />
                                        </td>
                                        <td className="p-2 border">
                                            <select
                                                name="stage"
                                                value={row.stage}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1 text-black"
                                                required
                                            >
                                                <option value="">Pilih Tahap</option>
                                                <option value="F0">F0: Lead</option>
                                                <option value="F1">F1: Opportunity</option>
                                                <option value="F2">F2: Proposal</option>
                                                <option value="F3">F3: Bidding</option>
                                                <option value="F4">F4: Negotiation</option>
                                                <option value="F5">F5: Contract</option>
                                            </select>
                                        </td>
                                        <td className="p-2 border">
                                            <input
                                                type="text"
                                                name="comments"
                                                value={row.comments}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1 text-black"
                                            />
                                        </td>
                                    </tr>
                                     ))} 
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row items-center gap-2">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full md:w-auto"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
                <div className="mt-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Data Sales yang Tersimpan</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border bg-light  rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-800 text-sm md:text-base text-white">
                                    <th className="p-2 border">Nama</th>
                                    <th className="p-2 border">Email</th>
                                    <th className="p-2 border">Tahap</th>
                                    <th className="p-2 border">Komentar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {databaseData.map((row, index) => (
                                    <tr key={index} className="text-sm md:text-base">
                                        <td className="p-2 border">{row.name}</td>
                                        <td className="p-2 border">{row.email}</td>
                                        <td className="p-2 border">{row.stage}</td>
                                        <td className="p-2 border">{row.comments}</td>
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

export default InputData;
