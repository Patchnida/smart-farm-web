'use client';

import React, { useState, useEffect } from "react";
import { useDate } from "../components/DataContext";
import Graph from "../components/graph";
import Table from "../components/table";

export default function Home() {
  const { selectedDate, setSelectedDate } = useDate();
  const [defaultTime, setDefaultTime] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>(defaultTime);

  const getDefaultTimeOption = (): string => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 6) return "00:00";
    if (currentHour >= 6 && currentHour < 12) return "06:00";
    if (currentHour >= 12 && currentHour < 18) return "12:00";
    if (currentHour >= 18 && currentHour < 24) return "18:00";
    return "error";
  };

  useEffect(() => {
    const timeOption = getDefaultTimeOption();
    if (timeOption !== "error") {
      setDefaultTime(timeOption);
      setSelectedTime(timeOption);
    } else {
      console.error("Invalid time range");
    }
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value); 
    setSelectedDate(selectedDate); 
  };

  const formatDateToThai = (date: Date | undefined): string => {
    if (!date) return "Invalid date";

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
      <main className="flex flex-col w-full h-fit items-center">
        <div className="w-11/12 h-5/6 mt-5 p-10 bg-white rounded-lg shadow-sm">
          <p className="text-3xl font-bold">
            {formatDateToThai(selectedDate)}
          </p>
          <select 
            onChange={handleTimeChange} 
            value={selectedTime}
            className="my-3 p-2 bg-white border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 transition"
          >
            <option value="" disabled>Select Time</option>
            <option value="00:00">00:00</option>
            <option value="06:00">06:00</option>
            <option value="12:00">12:00</option>
            <option value="18:00">18:00</option>
          </select>

          <Graph />

        </div>

        <div className="w-11/12 h-5/6 my-5 p-10 bg-white rounded-lg shadow-sm">
          <Table />
        </div>
      </main>
    </div>
  );
}
