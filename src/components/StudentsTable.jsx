import React from "react";
import { FaUserCircle } from "react-icons/fa"; // profile icon
import "../styles/StudentsTable.css"; // custom CSS

const StudentsTable = ({ students, onSelectStudent }) => {
  return (
    <div className="students-table-container">
      <h2 className="students-title">Our Students</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Student Name</th>
            <th>Admission No</th>
            <th>Class-Section</th>
            <th>Parent Name</th>
            <th>Parent Phone</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>
                <img src={stu.image} alt={stu.name} className="student-photo" />
              </td>
              <td>{stu.name}</td>
              <td>{stu.admissionNo}</td>
              <td>{stu.classSection}</td>
              <td>{stu.parentName}</td>
              <td>{stu.parentPhone}</td>
              <td>
                <FaUserCircle
                  className="profile-icon"
                  onClick={() => onSelectStudent(stu)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
