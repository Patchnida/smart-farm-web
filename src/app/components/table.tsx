import { useState } from "react";

const data = [
    { id: "0001", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0002", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0003", temp: "25°C", humid: "67%", moisture: "91%", disease: "ไม่เป็นโรค" },
    { id: "0004", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0005", temp: "36°C", humid: "87%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0006", temp: "25°C", humid: "89%", moisture: "66%", disease: "เป็นโรค" },
    { id: "0007", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0008", temp: "25°C", humid: "67%", moisture: "66%", disease: "เป็นโรค" },
    { id: "0009", temp: "36°C", humid: "87%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0010", temp: "25°C", humid: "89%", moisture: "66%", disease: "เป็นโรค" },
    { id: "0011", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
    { id: "0012", temp: "25°C", humid: "67%", moisture: "66%", disease: "เป็นโรค" },
];

function Table() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const filteredData = data.filter(row => 
        row.id.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const nextPage = () => {
        if (indexOfLastRow < filteredData.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">พริกทั้งหมด</h2>
                <div className="flex space-x-2">
                    <input 
                        type="text" 
                        placeholder="Search by ID" 
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600">Add New ID</button>
                </div>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">อุณหภูมิ</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">ความชื้นในอากาศ</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">ความชื้นในดิน</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">ความเสี่ยงในการเกิดโรค</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-700">{row.id}</td>
                            <td className={`py-3 px-4 ${row.temp === "36°C" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>{row.temp}</td>
                            <td className={`py-3 px-4 ${row.humid === "89%" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>{row.humid}</td>
                            <td className={`py-3 px-4 ${row.moisture === "91%" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>{row.moisture}</td>
                            <td className={`py-3 px-4 ${row.disease === "เป็นโรค" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>{row.disease}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filteredData.length > 10 && (
                <div className="flex justify-between items-center mt-4">
                    <button 
                        onClick={prevPage} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                        disabled={currentPage === 1}
                    >
                        หน้าก่อนหน้า
                    </button>
                    <span className="text-gray-700">หน้าที่ {currentPage}</span>
                    <button 
                        onClick={nextPage} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                        disabled={indexOfLastRow >= filteredData.length}
                    >
                        หน้าถัดไป
                    </button>
                </div>
            )}
        </div>
    );
}

export default Table;
