'use client';

import React from "react";
import { useParams } from "next/navigation";
import { initialData } from "@/app/eachIdData";
import Link from "next/link";
import Button from '@mui/material/Button';

function Detail() {
    const { id } = useParams(); 
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

                    <div className="flex flex-wrap gap-5 m-5 h-full">
                        {/* อุณหภูมิในดิน */}
                        <Link
                         href={"/"}
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
                        </Link>

                        {/* ความชื้นในอากาศ */}
                        <Link
                         href={"/"}
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
                        </Link>

                        {/* ความชื้นในดิน */}
                        <Link
                         href={"/"}
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
                        </Link>

                        {/* ความเสี่ยงในการเป็นโรค */}
                        <Link
                         href={"/"}
                         className="flex flex-col w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow-md p-10 text-lg flex-grow min-h-[250px]">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col gap-2 w-8/12 mb-5">
                                    <p className="text-2xl font-bold">การเกิดโรค</p>
                                    <p>ตรวจสอบการเกิดโรค 4 โรค ได้แก่ โรคใบจุดตากบ โรคใบหยิก เพลี้ยลง</p>
                                    <span className="text-3xl font-semibold my-5 self-center">{detailData.disease}</span>
                                </div>
                                <img src="/diseaseIcon.png" alt="Disease Icon" className="w-fit h-fit cursor-pointer" />
                            </div>
                            <p className="mt-2">คำแนะนำ : ใช้สารประเภทคลอโรธาโรนิล (chlorothalonil) ฉีด พ่นสม่าเสมอขณะระบาด จะได้ผลดี</p>
                            <div className="flex justify-between mt-2">
                                <Button
                                    className='my-2 px-5 text-white bg-green-600 hover:bg-green-700 hover:text-white'    
                                >ถ่ายรูป
                                </Button>
                                <Button
                                className='my-2 px-5 bg-gray-100 hover:bg-gray-200'    
                                >ดูประวัติย้อนหลัง
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;