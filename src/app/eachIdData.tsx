import { time } from "console";

export interface NotificationItem {
  dateTime: string;
  detail: Array<{
    id: string;
    icons: Array<{ src: string, alt: string }>;
    timeAgo: string;
    read: boolean;
  }>
}

export const data: NotificationItem[] = [
  {
    dateTime: "2024-11-10T09:00:00Z",
    detail: [
      {
        id: "0001",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "ตอนนี้",
        read: false
      }
    ]
  },
  {
    dateTime: "2024-11-10T09:05:00Z",
    detail: [
      {
        id: "0002",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "humidIcon.png", alt: "Humidity Icon" },
          { src: "moisIcon.png", alt: "Moisture Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "ตอนนี้",
        read: false
      }
    ]
  },
  {
    dateTime: "2024-11-10T09:10:00Z",
    detail: [
      {
        id: "0003",
        icons: [
          { src: "humidIcon.png", alt: "Humidity Icon" }
        ],
        timeAgo: "ตอนนี้",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-09T15:00:00Z",
    detail: [
      {
        id: "0004",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "4 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-09T15:05:00Z",
    detail: [
      {
        id: "0005",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "humidIcon.png", alt: "Humidity Icon" },
          { src: "moisIcon.png", alt: "Moisture Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "4 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-09T15:10:00Z",
    detail: [
      {
        id: "0006",
        icons: [
          { src: "humidIcon.png", alt: "Humidity Icon" }
        ],
        timeAgo: "4 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-10T09:15:00Z",
    detail: [
      {
        id: "0007",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "4 ชั่วโมงที่แล้ว",
        read: false
      }
    ]
  },
  {
    dateTime: "2024-11-10T09:20:00Z",
    detail: [
      {
        id: "0008",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "humidIcon.png", alt: "Humidity Icon" },
          { src: "moisIcon.png", alt: "Moisture Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "4 ชั่วโมงที่แล้ว",
        read: false
      }
    ]
  },
  {
    dateTime: "2024-11-10T09:25:00Z",
    detail: [
      {
        id: "0009",
        icons: [
          { src: "humidIcon.png", alt: "Humidity Icon" }
        ],
        timeAgo: "4 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-09T15:15:00Z",
    detail: [
      {
        id: "0010",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "8 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-09T15:20:00Z",
    detail: [
      {
        id: "0011",
        icons: [
          { src: "temIcon.png", alt: "Temperature Icon" },
          { src: "humidIcon.png", alt: "Humidity Icon" },
          { src: "moisIcon.png", alt: "Moisture Icon" },
          { src: "diseaseIcon.png", alt: "Disease Icon" }
        ],
        timeAgo: "8 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  },
  {
    dateTime: "2024-11-09T15:25:00Z",
    detail: [
      {
        id: "0012",
        icons: [
          { src: "humidIcon.png", alt: "Humidity Icon" }
        ],
        timeAgo: "8 ชั่วโมงที่แล้ว",
        read: true
      }
    ]
  }
];

export const icons = [
  { src: "temIcon.png", alt: "Temperature Icon" },
  { src: "humidIcon.png", alt: "Humidity Icon" },
  { src: "moisIcon.png", alt: "Moisture Icon" },
  { src: "diseaseIcon.png", alt: "Disease Icon" }
];

export const initialData = [
  {
    date: "Wednesday, October 25, 2024",
    time: "12.00",
    detail: [
      { id: "0001", temp: "33°C", humid: "67%", moisture: "66%", disease: "เป็นโรคใบจุดตากบ" },
      { id: "0002", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
      { id: "0003", temp: "25°C", humid: "67%", moisture: "91%", disease: "ไม่เป็นโรค" },
      { id: "0004", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
      { id: "0005", temp: "36°C", humid: "87%", moisture: "66%", disease: "ไม่เป็นโรค" },
      { id: "0006", temp: "25°C", humid: "89%", moisture: "66%", disease: "เป็นโรคใบหยิก" },
      { id: "0007", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
      { id: "0008", temp: "25°C", humid: "67%", moisture: "66%", disease: "เป็นโรค" },
      { id: "0009", temp: "36°C", humid: "87%", moisture: "66%", disease: "ไม่เป็นโรค" },
      { id: "0010", temp: "25°C", humid: "89%", moisture: "66%", disease: "เป็นโรคใบจุดตากบ" },
      { id: "0011", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค" },
      { id: "0012", temp: "25°C", humid: "67%", moisture: "66%", disease: "เป็นโรคใบหยิก" }
    ]
  }
];