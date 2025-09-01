import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../styles/StudentProfile.css";

const StudentProfile = ({ student, onClose }) => {
  const [fees, setFees] = useState([
    { id: 1, type: "Tuition Fee", amount: 20000, status: "Paid" },
    { id: 2, type: "Library Fee", amount: 5000, status: "Unpaid" },
    { id: 3, type: "Transport Fee", amount: 8000, status: "Paid" },
  ]);

  const [attendance, setAttendance] = useState([
    { date: "2025-08-26", status: "Present" },
    { date: "2025-08-27", status: "Present" },
    { date: "2025-08-28", status: "Absent" },
    { date: "2025-08-29", status: "Late" },
    { date: "2025-08-30", status: "Present" },
  ]);


  const [todayStatus, setTodayStatus] = useState("Present");
  const cycleStatus = () => {
    setTodayStatus((prev) =>
      prev === "Present" ? "Late" : prev === "Late" ? "Absent" : "Present"
    );
  };

 
  const totalAmount = fees.reduce((sum, f) => sum + f.amount, 0);
  const paidAmount = fees
    .filter((f) => f.status === "Paid")
    .reduce((sum, f) => sum + f.amount, 0);


  const toggleFeeStatus = (id) => {
    setFees((prev) =>
      prev.map((f) =>
        f.id === id
          ? { ...f, status: f.status === "Paid" ? "Unpaid" : "Paid" }
          : f
      )
    );
  };


  const statusCount = attendance.reduce(
    (acc, a) => {
      acc[a.status] = (acc[a.status] || 0) + 1;
      return acc;
    },
    { Present: 0, Absent: 0, Late: 0 }
  );

  const pieData = [
    { name: "Present", value: statusCount.Present },
    { name: "Absent", value: statusCount.Absent },
    { name: "Late", value: statusCount.Late },
  ];

  const COLORS = ["#4caf50", "#f44336", "#ff9800"]; 

  if (!student) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content wide">
        <button className="modal-close" onClick={onClose}>✖</button>

        <div className="profile-container">

          <div className="profile-left">
            <img
              src={student.image}
              alt={student.name}
              className="profile-photo-large"
            />
            <h2>{student.name}</h2>
            <p><b>Admission No:</b> {student.admissionNo}</p>
            <p><b>Class-Section:</b> {student.classSection}</p>
            <p><b>Parent Name:</b> {student.parentName}</p>
            <p><b>Parent Phone:</b> {student.parentPhone}</p>
          </div>


          <div className="profile-right">
            <h3>Fee Details</h3>
            <table className="fees-table">
              <thead>
                <tr>
                  <th>Fee Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee) => (
                  <tr key={fee.id} className="hover-row">
                    <td>{fee.type}</td>
                    <td>₹{fee.amount}</td>
                    <td>
                      <button
                        className={`status-btn ${
                          fee.status === "Paid" ? "paid" : "unpaid"
                        }`}
                        onClick={() => toggleFeeStatus(fee.id)}
                      >
                        {fee.status}
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td><b>Total</b></td>
                  <td colSpan="2">₹{totalAmount}</td>
                </tr>
                <tr>
                  <td><b>Paid</b></td>
                  <td colSpan="2">₹{paidAmount}</td>
                </tr>
                <tr>
                  <td><b>Balance</b></td>
                  <td colSpan="2">₹{totalAmount - paidAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="attendance-section">
          <h3>Attendance Report (Past 5 Days)</h3>
          <PieChart width={350} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>

          {/* Today's Marking */}
          <div className="today-marking">
            <h4>Mark Attendance for Today</h4>
            <div className="today-status">
              <img
                src={student.image}
                alt="student"
                className={`attendance-photo ${todayStatus.toLowerCase()}`}
                onClick={cycleStatus}
              />
              <div className="status-display">
                Current Status:{" "}
                <span className={todayStatus.toLowerCase()}>{todayStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
