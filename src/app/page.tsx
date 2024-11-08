'use client'

import Image from "next/image";
import NavBar from "./components/navbar";
import { useDate } from "./components/DataContext";

export default function Home() {
  const { selectedDate } = useDate();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">      
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <h1>Selected Date:</h1>
        <p>{selectedDate.toDateString()}</p>
      </main>
    </div>
  );
}
