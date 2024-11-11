'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDate } from './DataContext';
import { NotificationItem, data } from '../eachIdData';
import Notification from './notification';

function NavBar() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { selectedDate, setSelectedDate } = useDate();
  const [notifications, setNotifications] = useState<NotificationItem[]>(data);
  const [showAll, setShowAll] = useState(false); // State to toggle showing all notifications

  const toggleCalendar = () => setShowCalendar(!showCalendar);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  const onDateChange = (value: Date | Date[], event: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      console.log("Selected Date:", value);
    } else if (Array.isArray(value) && value.length === 2 && value[0] instanceof Date && value[1] instanceof Date) {
      setSelectedDate(value[0]);
      console.log("Selected Date Range:", value);
    }
    setShowCalendar(false);
  };

  const handleRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Toggle between showing all notifications or a limited view
  const toggleSeeMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex items-center justify-between w-full px-5 py-3 h-16 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-3">
        <img src="LPKNicon2.png" alt="LPKN Icon" className="w-26 h-10 cursor-pointer" />
        <h1 className="text-lg font-semibold text-gray-800 cursor-pointer">LPKN</h1>
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="flex justify-center items-center w-10 h-10 border border-gray-400 rounded-full cursor-pointer" onClick={toggleCalendar}>
          <img src="schedule.png" alt="calendar icon" className="w-6 h-6" />
        </button>
        <button className="flex justify-center items-center w-10 h-10 border border-gray-400 rounded-full cursor-pointer" onClick={toggleNotifications}>
          <img src="bell.png" alt="notification icon" className="w-6 h-6" />
        </button>

        {showCalendar && (
          <div className="absolute top-16 right-0 shadow-lg border border-gray-200 rounded-md z-50 bg-white">
            <Calendar onChange={(value, event) => onDateChange(value, event)} value={selectedDate} />
          </div>
        )}

      {showNotifications && (
        <div className="absolute top-16 right-0 w-80 max-h-80 shadow-lg border border-gray-200 rounded-md z-50 bg-white overflow-y-auto">
          {(showAll ? notifications : notifications.slice(0, 3)).map((notification) => (
            notification.detail.map((detailItem) => (
              <Notification
                key={detailItem.id}
                id={detailItem.id}
                icons={detailItem.icons}
                timeAgo={detailItem.timeAgo}
                read={detailItem.read}
                onRead={() => handleRead(detailItem.id)}
              />
            ))
          ))}
          <button
            onClick={toggleSeeMore}
            className="w-full text-center py-2 text-blue-500 hover:text-blue-700"
          >
            {showAll ? "แสดงน้อยกว่านี้" : "แสดงมากกว่านี้"}
          </button>
        </div>
      )}

      </div>
    </div>
  );
}

export default NavBar;
