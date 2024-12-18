import { useState } from "react";
import PopupAddID from "./popUpAddID";
import PopUpDelete from "./popUpDelete";
import Link from "next/link";
import { initialData } from "@/app/eachIdData";
import { isTempOutOfRange,
    isHumidOutOfRange,
    isMoistureOutOfRange,
    isDiseaseDetected,
    isNitrogenOutOfRange,
    isPhosphorusOutOfRange,
    isPotassiumOutOfRange, } from "@/utils/validation";

function Table() {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState<string | null>(null);

    const [newEntry, setNewEntry] = useState({
        id: "",
        temp: "",
        humid: "",
        moisture: "",
        disease: ""
    });

    const filteredData = data[0].detail.filter(row => 
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

    const handleSave = () => {
        setData(prevData => {
            const updatedData = [...prevData];
            updatedData[0].detail = [...updatedData[0].detail, newEntry];
            return updatedData;
        });
        setNewEntry({ id: "", temp: "", humid: "", moisture: "", disease: "" });
        setIsPopUpOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEntry(prev => ({ ...prev, [name]: value }));
    };

    const openDeletePopup = (id: string) => {
        setIdToDelete(id);
        setIsDeletePopUpOpen(true);
    };

    const handleConfirmDelete = () => {
        if (idToDelete) {
            setData(prevData => {
                const updatedData = [...prevData];
                updatedData[0].detail = updatedData[0].detail.filter(row => row.id !== idToDelete);
                return updatedData;
            });
            setIdToDelete(null);
        }
        setIsDeletePopUpOpen(false);
    };

    const handleCancelDelete = () => {
        setIdToDelete(null);
        setIsDeletePopUpOpen(false);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">พริกทั้งหมด</h2>
                <div className="flex space-x-2">
                    <input 
                        type="text" 
                        placeholder="ค้นหาด้วย ID" 
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
                        onClick={() => setIsPopUpOpen(true)} 
                    >
                        เพิ่ม ID ใหม่
                    </button>
                </div>
            </div>
            <table className="w-full bg-white border border-gray-200 text-center">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                        <th className="py-3 px-4 font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 font-semibold text-gray-600">อุณหภูมิ</th>
                        <th className="py-3 px-4 font-semibold text-gray-600">ความชื้นในอากาศ</th>
                        <th className="py-3 px-4 font-semibold text-gray-600">ความชื้นในดิน</th>
                        <th className="py-3 px-4 font-semibold text-gray-600">ความเสี่ยงในการเกิดโรค</th>
                        <th className="py-3 px-4 font-semibold text-gray-600">
                            <p>ธาตุอาหารหลัก npk</p>
                            ค่าไนโตรเจน (N)
                        </th>
                        <th className="py-3 px-4 font-semibold text-gray-600">
                            <p>ธาตุอาหารหลัก npk</p>
                            ค่าฟอสฟอรัส (P)
                        </th>
                        <th className="py-3 px-4 font-semibold text-gray-600">
                            <p>ธาตุอาหารหลัก npk</p>
                            ค่าโพแทสเซียม (K)
                        </th>
                        <th className="py-3 px-4 font-semibold text-gray-600"></th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row) => (
                        <tr key={row.id} className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-700">
                                <Link href={`/detail/${row.id}`}>
                                    {row.id}
                                </Link>
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isTempOutOfRange(parseFloat(row.temp))
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.temp} °C
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isHumidOutOfRange(parseFloat(row.humid))
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.humid} %
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isMoistureOutOfRange(parseFloat(row.moisture))
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.moisture} %
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isDiseaseDetected(row.disease)
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.disease}
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isNitrogenOutOfRange(row.npk.nitrogen)
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.npk.nitrogen} มก./ล.
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isPhosphorusOutOfRange(row.npk.phosphorus)
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.npk.phosphorus} มก./ล.
                            </td>

                            <td
                                className={`py-3 px-4 ${
                                    isPotassiumOutOfRange(row.npk.potassium)
                                        ? "text-red-500 font-semibold"
                                        : "text-green-500 font-semibold"
                                }`}
                            >
                                {row.npk.potassium} มก./ล.
                            </td>

                            <td
                                className="py-3 px-4 text-red-500 font-semibold cursor-pointer hover:underline"
                                onClick={() => openDeletePopup(row.id)}
                            >
                                ลบ
                            </td>
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

            <PopupAddID isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} onSave={handleSave}>
                <input
                    name="id"
                    type="text"
                    placeholder="เพิ่ม ID ใหม่"
                    value={newEntry.id}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                />
            </PopupAddID>

            <PopUpDelete
                isOpen={isDeletePopUpOpen}
                onClose={handleCancelDelete}
                Confirm={handleConfirmDelete}
                id={idToDelete}
            />
        </div>
    );
}

export default Table;
