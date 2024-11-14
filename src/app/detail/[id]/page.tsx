'use client';

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { initialData } from "@/app/eachIdData";
import Link from "next/link";
import Button from '@mui/material/Button';
import PopupDisease from "@/components/popUpDisease";

function Detail() {
    const { id } = useParams(); 
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    if (!id || !initialData[0]) return <p>ข้อมูลไม่พบสำหรับ ID นี้</p>;

    const detailData = initialData[0].detail.find(detail => detail.id === id);

    if (!detailData) {
        return <p>ข้อมูลไม่พบสำหรับ ID นี้</p>;
    }

    const formatDateToThai = (dateString: string): string => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid date";

        const dayNames = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
        const monthNames = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
            "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];

        const dayName = dayNames[date.getDay()];
        const day = date.getDate();
        const monthName = monthNames[date.getMonth()];
        const buddhistYear = date.getFullYear() + 543;

        return `${dayName}ที่ ${day} ${monthName} ${buddhistYear}`;
    };

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    const historyData = [
        {
            date: "2022-10-23",
            status: "ปกติ",
            disease: "ไม่มีโรค",
            image: "/path/to/image1.png",
        },
        {
            date: "2022-10-24",
            status: "เป็นโรค",
            disease: "จุดใบจุด",
            image: "/path/to/image2.png",
        },
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] h-full">      
            <div className="flex flex-col w-full h-fit items-center">
                <div className="w-11/12 h-5/6 mt-5 p-10 bg-white rounded-lg shadow-sm">
                   <div className="flex flex-col gap-2 mb-5">
                        <p className="text-3xl font-bold">
                            {formatDateToThai(initialData[0].date)}
                        </p>
                        <p className="text-2xl font-medium text-sky-700">
                            เวลา {initialData[0].time} น.
                        </p>
                   </div>
                    <p className="font-semibold text-lg mt-2">ID {detailData.id}</p>

                    <div className="flex flex-wrap gap-5 mt-5 h-full">
                        {/* อุณหภูมิในดิน */}
                        <div
                         className="flex flex-col w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow-md p-10 text-lg flex-grow min-h-[250px]">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col gap-2">
                                    <p className="text-2xl font-bold">อุณหภูมิในดิน</p>
                                    <p>ควรอยู่ระหว่าง 20-30 °C</p>
                                    <p className="my-5">ค่าปัจจุบัน 
                                        <span className="text-3xl font-semibold ml-10">{detailData.temp}</span>
                                    </p>
                                    <p>สถานะ : สูงกว่าเกณฑ์ที่เหมาะสม</p>
                                </div>
                                <img src="/temIcon.png" alt="Temperature Icon" className="w-fit h-fit cursor-pointer" />
                            </div>
                            <p className="mt-2">คำแนะนำ : ควรลดอุณหภูมิ</p>
                        </div>

                        {/* ความชื้นในอากาศ */}
                        <div
                         className="flex flex-col w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow-md p-10 text-lg flex-grow min-h-[250px]">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col gap-2">
                                    <p className="text-2xl font-bold">ความชื้นในอากาศ</p>
                                    <p>ควรอยู่ระหว่าง 60-80 %</p>
                                    <p className="my-5">ค่าปัจจุบัน 
                                        <span className="text-3xl font-semibold ml-10">{detailData.humid}</span>
                                    </p>
                                    <p>สถานะ : ปกติ</p>
                                </div>
                                <img src="/humidIcon.png" alt="Humid Icon" className="w-fit h-fit cursor-pointer" />
                            </div>
                            <p className="mt-2">คำแนะนำ : -</p>
                        </div>

                        {/* ความชื้นในดิน */}
                        <div
                         className="flex flex-col w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow-md p-10 text-lg flex-grow min-h-[250px]">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col gap-2">
                                <p className="text-2xl font-bold">ความชื้นในดิน</p>
                                <p>ควรอยู่ระหว่าง 60-70 %</p>
                                <p className="my-5">ค่าปัจจุบัน 
                                    <span className="text-3xl font-semibold ml-10">{detailData.moisture}</span>
                                </p>
                                <p>สถานะ : ปกติ</p>
                                </div>
                                <img src="/moisIcon.png" alt="Moisture Icon" className="w-fit h-fit cursor-pointer" />
                            </div>
                            <p className="mt-2">คำแนะนำ : -</p>
                        </div>

                        {/* ความเสี่ยงในการเป็นโรค */}
                        <div
                         className="flex flex-col w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow-md p-10 text-lg flex-grow min-h-[250px]">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col gap-2 w-8/12 mb-5">
                                    <p className="text-2xl font-bold">การเกิดโรค</p>
                                    <p>ตรวจสอบการเกิดโรค 4 โรค ได้แก่ โรคใบจุดตากบ โรคใบหยิก เพลี้ยลง</p>
                                    <span className="text-3xl font-semibold my-5 self-center">{detailData.disease}</span>
                                </div>
                                <img src="/diseaseIcon.png" alt="Disease Icon" className="w-fit h-fit cursor-pointer" />
                            </div>
                            <p>คำแนะนำ : ใช้สารประเภทคลอโรธาโรนิล (chlorothalonil) ฉีด พ่นสม่าเสมอขณะระบาด จะได้ผลดี</p>
                            <div className="flex justify-between mt-2">
                                <Button
                                    className='my-2 px-5 text-white bg-green-600 hover:bg-green-700 hover:text-white'    
                                >ถ่ายรูป
                                </Button>
                                <Button
                                onClick={handleOpenPopup}
                                className='my-2 px-5 bg-gray-100 hover:bg-gray-200'    
                                >ดูประวัติย้อนหลัง
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow-md p-10 text-lg flex-grow min-h-[250px]">
                            
                            
                            <div className="flex justify-between w-full">
                                
                                <div className="flex flex-col w-full lg:w-10/12">
                                    <p className="text-2xl font-bold mb-2">ธาตุอาหารหลัก NPK</p>
                                    
                                    <div className="flex flex-col gap-5 lg:flex-row mt-5 ">

                                        {/* ค่าไนโตรเจน */}
                                        <div className="flex flex-col w-full lg:w-4/12">
                                            <p className="font-bold">ค่าไนโตรเจน (N)</p>
                                            <p>ควรอยู่ระหว่าง 50 – 200 มก./ล.</p>
                                            

                                            <p className="my-5">ค่าปัจจุบัน 
                                                <span className="text-3xl font-semibold ml-10">{detailData.npk.nitrogen} มก./ล.</span>
                                            </p>
                                            <p>สถานะ : ปกติ</p>

                                            <p className="mt-2">คำแนะนำ : -</p>
                                        </div>

                                        {/* ค่าฟอสฟอรัส */}
                                        <div className="flex flex-col w-full lg:w-4/12">
                                            <p className="font-bold">ค่าฟอสฟอรัส (P)</p>
                                            <p>ควรอยู่ระหว่าง 4 – 14 มก./ล.</p>
                                            

                                            <p className="my-5">ค่าปัจจุบัน 
                                                <span className="text-3xl font-semibold ml-10">{detailData.npk.phosphorus} มก./ล.</span>
                                            </p>
                                            <p>สถานะ : น้อยเกิน</p>

                                            <p className="mt-2">คำแนะนำ : ใช้ปุ๋ยที่มีฟอสฟอรัสสูง เช่น ปุ๋ยสูตร 16-20-0 หรือปุ๋ยอินทรีย์ที่มีปริมาณฟอสฟอรัสสูง</p>
                                        </div>

                                        <div className="flex flex-col w-full lg:w-4/12">
                                            <p className="font-bold">ค่าโพแทสเซียม (K)</p>
                                            <p>ควรอยู่ระหว่าง 50 – 200 มก./ล.</p>

                                            <p className="my-5">ค่าปัจจุบัน 
                                                <span className="text-3xl font-semibold ml-10">{detailData.npk.potassium} มก./ล.</span>
                                            </p>
                                            <p>สถานะ : มากเกิน</p>

                                            <p className="mt-2">คำแนะนำ : ควรใช้น้ำปรับสมดุลหรือปุ๋ยที่มีโพแทสเซียมต่ำ</p>
                                        </div>

                                    </div>
                                    
                                </div>
                                

                                <img src="/npkIcon.png" alt="Moisture Icon" className="w-fit h-fit cursor-pointer lg:self-center" />
                            </div>
                            
                        </div> 
                            
                        </div>
                </div>
            </div>

            <PopupDisease isOpen={isPopupOpen} onClose={handleClosePopup} onSave={() => {}}>
                <div className="flex flex-col">
                    {historyData.map((record, index) => (
                        <div key={index} className="border-b p-4">
                            <p className="text-gray-500">{record.date}</p>
                            <p className={`${record.status === "ปกติ" ? "text-green-500" : "text-red-500"}`}>
                                {record.status}
                            </p>
                            <p>{record.disease}</p>
                            <img src={record.image} alt="Disease image" className="w-full h-auto mt-2" />
                        </div>
                    ))}
                </div>
            </PopupDisease>

        </div>
    );
}

export default Detail;
