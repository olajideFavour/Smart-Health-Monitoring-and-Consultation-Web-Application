export const data = {
  users: [{
      id: 'id1',
      email: "favour1@example.com",
      password: "password123",
      user: "patient",
    },
    {
      id: 'id2',
      email: "favour2@example.com",
      password: "password123",
      user: "patient",
    },
    {
      id: 'id3',
      email: "doctor@example.com",
      password: "password123",
      user: 'doctor',
    },
    {
      id: 'id4',
      email: "doctor2@example.com",
      password: "password123",
      user: 'doctor',
    }
  ],
  Patientuser: [
    {
      id: 'id1',
      name: "Olajide Favour",
      email: "favour1@example.com",
      phone: "+234 801 234 5678",
      age: 24,
      gender: "Female",
      address: "Lagos, Nigeria",
      profilePic: "./src/assets/_MG_8411.jpg",
      healthStatus: "Good",
      medications: ['drugid1','drugid2'],
      doctorsId: ['id3'],
      notification: ["Remember to take your meds at 8 PM",
    "You have an appointment tomorrow",]
    },
    {
      id: 'id2',
      name: "Olajide precious",
      email: "favour2@example.com",
      phone: "+234 801 234 5678",
      age: 24,
      gender: "Female",
      address: "Lagos, Nigeria",
      profilePic: './src/assets/_MG_8411.jpg',
      healthStatus: "Good",
      medications: [],
      doctorsId:[],
      notification: [],
    }  
  ],
  doctorUser:  [
    {
      id: 'id3',
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      email: "doctor@example.com",
      rating: 4.8,
      certifications: ["MBBS", "MRCGP"],
      avatar: "././src/assets/doctor.png",
      online: true,
    },
    {
      id: 'id4',
      name: "Dr. Michael Lee",
      specialty: "Cardiologist",
      email: "doctor2@example.com",
      rating: 4.7,
      certifications: ["MBBS", "FWACP"],
      avatar: "././src/assets/doctor.png",
      online: false,
    },
  ],
  medication:[
    {
      id: 'drugid1',
      name: "Paracetamol 500mg",
      prescription: 'twice daily after meal for three days',
      time: "08:00 AM",
      completed: false,
    },
    {
      id: "drugid2",
      name: "Vitamin C",
      prescription: 'twice daily after meal for three days',
      time: "01:00 PM",
      completed: false,
    },
  ],
  chartlist:[
    {
      id: 'chart1',
      users:{
        doctorsId: 'id3',
        patientId : "id1"
      },
      messages: [
        { id: 1, sender: "doctor", text: "Hello, how are you feeling today?", time: "09:10 AM" },
        { id: 2, sender: "user", text: "I have a mild fever and headache.", time: "09:12 AM" },
        {
          id: 3,
          sender: "doctor",
          type: "medication",
          prescription: {
            title: "Prescription",
            medications: ["Paracetamol 500mg - twice daily", "Vitamin C - once daily"],
          },
          time: "09:15 AM",
        },
      ],
    }
  ]
  
}


export const users = [
  {
    id: 'id1',
    email: "favour1@example.com",
    password: "password123",
    user: "patient",
  },
  {
    id: 'id2',
    email: "favour1@example.com",
    password: "password123",
    user: "patient",
  },
  {
    id: 'id3',
    email: "doctor@example.com",
    password: "password123",
    user: 'doctor',
  },
  {
    id: 'id4',
    email: "doctor2@example.com",
    password: "password123",
    user: 'doctor',
  }
]


export const Patientuser = [
  {
    id: 'id1',
    name: "Olajide Favour",
    email: "favour1@example.com",
    phone: "+234 801 234 5678",
    age: 24,
    gender: "Female",
    address: "Lagos, Nigeria",
    profilePic: "./src/assets/_MG_8411.jpg",
    healthStatus: "Good",
    medications: ['drugid1','drugid2'],
    doctorsId: ['id3']
  },
  {
    id: 'id2',
    name: "Olajide precious",
    email: "favour1@example.com",
    phone: "+234 801 234 5678",
    age: 24,
    gender: "Female",
    address: "Lagos, Nigeria",
    profilePic: "./src/assets/_MG_8411.jpg",
    healthStatus: "Good",
    medications: [],
    doctorsId:[]
  }  
];

export const doctorUser = [
  {
    id: 'id3',
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    email: "doctor@example.com",
    rating: 4.8,
    certifications: ["MBBS", "MRCGP"],
    avatar: "././src/assets/doctor.png",
    online: true,
  },
  {
    id: 'id4',
    name: "Dr. Michael Lee",
    specialty: "Cardiologist",
    email: "doctor2@example.com",
    rating: 4.7,
    certifications: ["MBBS", "FWACP"],
    avatar: "././src/assets/doctor.png",
    online: false,
  },
]


export const medication = [
  {
    id: 'drugid1',
    name: "Paracetamol 500mg",
    prescription: 'twice daily after meal for three days',
    time: "08:00 AM",
    completed: false,
  },
  {
    id: "drugid2",
    name: "Vitamin C",
    prescription: 'twice daily after meal for three days',
    time: "01:00 PM",
    completed: false,
  },
]

export const chartlist = [
  {
    id: 'chart1',
    users:{
      doctorsId: 'id3',
      patientId : "id1"
    },
    messages: [
      { id: 1, sender: "doctor", text: "Hello, how are you feeling today?", time: "09:10 AM" },
      { id: 2, sender: "user", text: "I have a mild fever and headache.", time: "09:12 AM" },
      {
        id: 3,
        sender: "doctor",
        type: "medication",
        prescription: {
          title: "Prescription",
          medications: ["Paracetamol 500mg - twice daily", "Vitamin C - once daily"],
        },
        time: "09:15 AM",
      },
    ],
  }
]

