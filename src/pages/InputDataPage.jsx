import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from "../components/Navbar";

const InputData = () => {
    const [customerData, setCustomerData] = useState([
        { namaPenginapan: '', jumlahPengguna: '', penggunaanData: '', penghasilanBulan: '' }
    ]);
    const [databaseData, setDatabaseData] = useState([]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newCustomerData = [...customerData];
        newCustomerData[index][name] = value;
        setCustomerData(newCustomerData);
    };

    // const handleAddRow = () => {
    //     setCustomerData([
    //         ...customerData,
    //         { namaPenginapan: '', jumlahPengguna: '', penggunaanData: '', penghasilanBulan: '' }
    //     ]);
    // };

    // const handleRemoveRow = (index) => {
    //     const newCustomerData = customerData.filter((_, i) => i !== index);
    //     setCustomerData(newCustomerData);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/datapelanggan', customerData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Data Berhasil disimpan!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                setCustomerData([{ namaPenginapan: '', jumlahPengguna: '', penggunaanData: '', penghasilanBulan: '' }]);
                fetchDatabaseData();
            } else {
                throw new Error('Data gagal disimpan');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Data gagal disimpan!',
                showConfirmButton: false,
                timer: 1500,
            });
            console.error('Error submitting data:', error);
        }
    };

    const fetchDatabaseData = async () => {
        try {
            const response = await axios.get('/api/datapelanggan');
            setDatabaseData(response.data);
        } catch (error) {
            console.error('Error fetching database data:', error);
        }
    };

    useEffect(() => {
        fetchDatabaseData();
    }, []);

    return (
        <div className="fixed-top min-h-screen bg-gradient-to-b text-gray-800 from-blue-50 to-white">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="text-left mb-10">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">Input Data</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border bg-light text-gray-800 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-800 text-white text-sm md:text-base">
                                    <th className="p-2 border">Nama Penginapan</th>
                                    <th className="p-2 border">Jumlah Pengguna</th>
                                    <th className="p-2 border">Penggunaan Data</th>
                                    <th className="p-2 border">Penghasilan Bulanan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerData.map((row, index) => (
                                    <tr key={index} className="text-sm md:text-base">
                                        <td className="p-2 border">
                                            <input
                                                type="text"
                                                name="namaPenginapan"
                                                value={row.namaPenginapan}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1"
                                                required
                                            />
                                        </td>
                                        <td className="p-2 border">
                                            <input
                                                type="text"
                                                name="jumlahPengguna"
                                                value={row.jumlahPengguna}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1"
                                                required
                                            />
                                        </td>
                                        <td className="p-2 border">
                                            <input
                                                type="text"
                                                name="penggunaanData"
                                                value={row.penggunaanData}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1"
                                            />
                                        </td>
                                        <td className="p-2 border">
                                            <input
                                                type="text"
                                                name="penghasilanBulan"
                                                value={row.penghasilanBulan}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border w-full p-1"
                                            />
                                        </td>
                                        <td className="p-2 border text-center">
                                            {/* <button
                                                type="button"
                                                onClick={() => handleRemoveRow(index)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                            >
                                                Hapus
                                            </button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row items-center gap-2">
                        {/* <button
                            type="button"
                            onClick={handleAddRow}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
                        >
                            Tambah Baris
                        </button> */}
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full md:w-auto"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
                <div className="mt-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Data yang Tersimpan</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border bg-light rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-800 text-white text-sm md:text-base">
                                    <th className="p-2 border">Nama Penginapan</th>
                                    <th className="p-2 border">Jumlah Pengguna</th>
                                    <th className="p-2 border">Penggunaan Data</th>
                                    <th className="p-2 border">Penghasilan Bulanan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {databaseData.map((row, index) => (
                                    <tr key={index} className="text-sm md:text-base">
                                        <td className="p-2 border">{row.nama_penginapan}</td>
                                        <td className="p-2 border">{row.jumlah_pengguna}</td>
                                        <td className="p-2 border">{row.penggunaan_data_per_bulan}</td>
                                        <td className="p-2 border">{row.penghasilan_per_bulan}</td>
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
