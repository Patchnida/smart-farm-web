export interface NotificationItem {
  id: string;
  icons: Array<{ src: string, alt: string }>;
  timeAgo: string;
  read: boolean;
}

export const data: NotificationItem[] = [
  {
    id: "0001",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "now",
    read: false
  },
  {
    id: "0002",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "humidIcon.png", alt: "Humidity Icon" },
      { src: "moisIcon.png", alt: "Moisture Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "now",
    read: false
  },
  {
    id: "0003",
    icons: [
      { src: "humidIcon.png", alt: "Humidity Icon" }
    ],
    timeAgo: "now",
    read: true
  },
  {
    id: "0004",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "18 hr ago",
    read: true
  },
  {
    id: "0005",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "humidIcon.png", alt: "Humidity Icon" },
      { src: "moisIcon.png", alt: "Moisture Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "18 hr ago",
    read: true
  },
  {
    id: "0006",
    icons: [
      { src: "humidIcon.png", alt: "Humidity Icon" }
    ],
    timeAgo: "18 hr ago",
    read: true
  },
  {
    id: "0007",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "now",
    read: false
  },
  {
    id: "0008",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "humidIcon.png", alt: "Humidity Icon" },
      { src: "moisIcon.png", alt: "Moisture Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "now",
    read: false
  },
  {
    id: "0009",
    icons: [
      { src: "humidIcon.png", alt: "Humidity Icon" }
    ],
    timeAgo: "now",
    read: true
  },
  {
    id: "0010",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "18 hr ago",
    read: true
  },
  {
    id: "0011",
    icons: [
      { src: "temIcon.png", alt: "Temperature Icon" },
      { src: "humidIcon.png", alt: "Humidity Icon" },
      { src: "moisIcon.png", alt: "Moisture Icon" },
      { src: "diseaseIcon.png", alt: "Disease Icon" }
    ],
    timeAgo: "18 hr ago",
    read: true
  },
  {
    id: "0012",
    icons: [
      { src: "humidIcon.png", alt: "Humidity Icon" }
    ],
    timeAgo: "18 hr ago",
    read: true
  },
];


// export const data = [
//     {
//       "id": "0001",
//       "date": "Wednesday, October 23, 2022",
//       "time": "13:00",
//       "temperature": {
//         "label": "อุณหภูมิในดิน",
//         "icon": "temIcon.png",
//         "optimalValue": {
//           "min": 20,
//           "max": 30
//         },
//         "value": 32.5,
//         "status": "High",
//         "recommendation": "ควรลดอุณหภูมิ"
//       },
//       "humidity": {
//         "label": "ความชื้นในอากาศ",
//         "icon": "humidIcon.png",
//         "optimalValue": {
//           "min": 60,
//           "max": 80
//         },
//         "value": 85,
//         "status": "Normal"
//       },
//       "moisture": {
//         "label": "ความชื้นในดิน",
//         "icon": "moisIcon.png",
//         "optimalValue": {
//           "min": 7.2,
//           "max": 7.9
//         },
//         "value": 8.2,
//         "status": "High",
//         "recommendation": "เพิ่มดินหรือปุ๋ย"
//       },
//       "disease": {
//         "label": "การเกิดโรค",
//         "icon": "diseaseIcon.png",
//         "status": "เป็นโรค",
//         "type": "ใบจุดตากบ",
//         "recommendation": "ใช้สารประเภทคลอโรธาโรนิล (chlorothalonil) ฉีด พ่นสม่ำเสมอขณะระบาด",
//         "image": "https://www.farmkaset.org/contents/images/2-258-cercospora-capsici.jpg"
//       }
//     },
//     {
//       "id": "0002",
//       "date": "Thursday, October 24, 2022",
//       "time": "14:00",
//       "temperature": {
//         "label": "อุณหภูมิในดิน",
//         "icon": "temIcon.png",
//         "optimalValue": {
//           "min": 20,
//           "max": 30
//         },
//         "value": 28.0,
//         "status": "Normal",
//         "recommendation": ""
//       },
//       "humidity": {
//         "label": "ความชื้นในอากาศ",
//         "icon": "humidIcon.png",
//         "optimalValue": {
//           "min": 60,
//           "max": 80
//         },
//         "value": 78,
//         "status": "Normal"
//       },
//       "moisture": {
//         "label": "ความชื้นในดิน",
//         "icon": "moisIcon.png",
//         "optimalValue": {
//           "min": 7.2,
//           "max": 7.9
//         },
//         "value": 7.5,
//         "status": "Normal"
//       },
//       "disease": {
//         "label": "การเกิดโรค",
//         "icon": "diseaseIcon.png",
//         "status": "ไม่มีโรค",
//         "type": "",
//         "recommendation": "",
//         "image": ""
//       }
//     },
//     {
//       "id": "0003",
//       "date": "Friday, October 25, 2022",
//       "time": "15:00",
//       "temperature": {
//         "label": "อุณหภูมิในดิน",
//         "icon": "temIcon.png",
//         "optimalValue": {
//           "min": 20,
//           "max": 30
//         },
//         "value": 18.5,
//         "status": "Low",
//         "recommendation": "ควรเพิ่มอุณหภูมิ"
//       },
//       "humidity": {
//         "label": "ความชื้นในอากาศ",
//         "icon": "humidIcon.png",
//         "optimalValue": {
//           "min": 60,
//           "max": 80
//         },
//         "value": 55,
//         "status": "Low",
//         "recommendation": "ควรเพิ่มความชื้นในอากาศ"
//       },
//       "moisture": {
//         "label": "ความชื้นในดิน",
//         "icon": "moisIcon.png",
//         "optimalValue": {
//           "min": 7.2,
//           "max": 7.9
//         },
//         "value": 6.9,
//         "status": "Low",
//         "recommendation": "เพิ่มปุ๋ยหรือรดน้ำ"
//       },
//       "disease": {
//         "label": "การเกิดโรค",
//         "icon": "diseaseIcon.png",
//         "status": "ไม่มีโรค",
//         "type": "",
//         "recommendation": "",
//         "image": ""
//       }
//     },
//     {
//       "id": "0004",
//       "date": "Saturday, October 26, 2022",
//       "time": "10:30",
//       "temperature": {
//         "label": "อุณหภูมิในดิน",
//         "icon": "temIcon.png",
//         "optimalValue": {
//           "min": 20,
//           "max": 30
//         },
//         "value": 31.0,
//         "status": "High",
//         "recommendation": "ควรลดอุณหภูมิ"
//       },
//       "humidity": {
//         "label": "ความชื้นในอากาศ",
//         "icon": "humidIcon.png",
//         "optimalValue": {
//           "min": 60,
//           "max": 80
//         },
//         "value": 82,
//         "status": "High",
//         "recommendation": "ควรลดความชื้นในอากาศ"
//       },
//       "moisture": {
//         "label": "ความชื้นในดิน",
//         "icon": "moisIcon.png",
//         "optimalValue": {
//           "min": 7.2,
//           "max": 7.9
//         },
//         "value": 8.1,
//         "status": "High",
//         "recommendation": "ลดปุ๋ยและความชื้น"
//       },
//       "disease": {
//         "label": "การเกิดโรค",
//         "icon": "diseaseIcon.png",
//         "status": "ไม่มีโรค",
//         "type": "",
//         "recommendation": "",
//         "image": ""
//       }
//     }
//   ];

  