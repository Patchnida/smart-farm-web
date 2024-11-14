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
      { id: "0001", temp: "33°C", humid: "67%", moisture: "66%", disease: "เป็นโรคใบจุดตากบ", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0002", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0003", temp: "25°C", humid: "67%", moisture: "91%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0004", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0005", temp: "36°C", humid: "87%", moisture: "66%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0006", temp: "25°C", humid: "89%", moisture: "66%", disease: "เป็นโรคใบหยิก", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0007", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0008", temp: "25°C", humid: "67%", moisture: "66%", disease: "เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0009", temp: "36°C", humid: "87%", moisture: "66%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0010", temp: "25°C", humid: "89%", moisture: "66%", disease: "เป็นโรคใบจุดตากบ", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0011", temp: "25°C", humid: "67%", moisture: "66%", disease: "ไม่เป็นโรค", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } },
      { id: "0012", temp: "25°C", humid: "67%", moisture: "66%", disease: "เป็นโรคใบหยิก", npk: { nitrogen: 150, phosphorus: 3, potassium: 220 } }
    ]
  }
];


export const historyData = [
  {
    id: "0001",
    history: [
      {
        date: "2022-10-23",
        time: "00.00",
        status: "ปกติ",

        image: "https://medthai.com/wp-content/uploads/2014/08/%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%82%E0%B8%B5%E0%B9%89%E0%B8%AB%E0%B8%99%E0%B8%B9.jpg",
        recomment: "-",
      },
      {
        date: "2022-10-24",
        time: "12.00",
        status: "เป็นโรคใบจุดตากบ",
        image: "https://www.opsmoac.go.th/data/warning/l/630900000832.jpg",
        recomment: "ใช้สารประเภทคลอโรธาโรนิล (chlorothalonil) ฉีด พ่นสม่าเสมอขณะระบาด จะได้ผลดี",
      },
    ]
  }
];
