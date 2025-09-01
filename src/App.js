import React, { useState } from "react";
import SchoolInfo from "./components/SchoolInfo";
import SchoolCarousel from "./components/SchoolCarousel";
import StudentsTable from "./components/StudentsTable";
import StudentProfile from "./components/StudentProfile";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/911/382/small_2x/happy-student-boy-with-books-isolated-free-photo.jpg",
      name: "Ravi Kumar",
      parentName: "Suresh Kumar",
      parentPhone: "9876543210",
      admissionNo: "ADM001",
      classSection: "10-A",
      totalFee: 50000,
      paidFee: 30000,
      balanceFee: 20000,
    },
    {
      id: 2,
      image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl95b3VuZ19naXJsX3dpdGhfc3R1ZGVudF9iYWNrcGFja19hbl82OWU5MGJmMC04OTRiLTQ3Y2QtOTlmNS1kZTBmZmU0MThiYWJfMS5wbmc.png",
      name: "Anjali Sharma",
      parentName: "Raj Sharma",
      parentPhone: "9123456780",
      admissionNo: "ADM002",
      classSection: "9-B",
      totalFee: 45000,
      paidFee: 25000,
      balanceFee: 20000,
    },
    {
      id: 3,
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg",
      name: "Pierre Dubois",
      parentName: "Jean Dubois",
      parentPhone: "9191919191",
      admissionNo: "ADM003",
      classSection: "8-C",
      totalFee: 40000,
      paidFee: 20000,
      balanceFee: 20000,
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s",
      name: "Marie Claire",
      parentName: "Louis Claire",
      parentPhone: "9292929292",
      admissionNo: "ADM004",
      classSection: "7-A",
      totalFee: 35000,
      paidFee: 15000,
      balanceFee: 20000,
    },
    {
      id: 5,
      image: "https://static.vecteezy.com/system/resources/thumbnails/051/688/995/small_2x/smiling-young-male-university-student-standing-isolate-on-transparency-background-png.png",
      name: "Lucas Martin",
      parentName: "Paul Martin",
      parentPhone: "9393939393",
      admissionNo: "ADM005",
      classSection: "6-B",
      totalFee: 30000,
      paidFee: 10000,
      balanceFee: 20000,
    },
  ];

  return (
    <div>
      <SchoolInfo />
      <SchoolCarousel />
      <StudentsTable students={students} onSelectStudent={setSelectedStudent} />
      {selectedStudent && (
        <StudentProfile
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}

export default App;
