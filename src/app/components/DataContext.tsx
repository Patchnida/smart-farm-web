'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type DateContextType = {
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const DateProvider = ({ children }: { children: ReactNode }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
    return (
      <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
        {children}
      </DateContext.Provider>
    );
  };
  
  export const useDate = () => {
    const context = useContext(DateContext);
    if (!context) {
      throw new Error('useDate must be used within a DateProvider');
    }
    return context;
  };