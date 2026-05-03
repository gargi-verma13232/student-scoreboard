import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./index.css";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", score: 85 },
  { id: 2, name: "Priya Patel", score: 36 },
  { id: 3, name: "Rohan Mehta", score: 72 },
  { id: 4, name: "Sneha Verma", score: 28 },
  { id: 5, name: "Karan Singh", score: 91 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [nextId, setNextId] = useState(6);

  const handleScoreChange = (id, newScore) => {
    setStudents((prev) => prev.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    ));
  };

  const handleAddStudent = (name, score) => {
    const newStudent = {
      id: nextId,
      name: name,
      score: score,
    };
    setStudents((prev) => [...prev, newStudent]);
    setNextId((prev) => prev + 1);
  };

  const handleRemove = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const totalStudents = students.length;
  const passing = students.filter((s) => s.score >= 40).length;
  const failing = totalStudents - passing;

  return (
    <div className="app">
      <Header />

      <div className="stats-bar">
        <div className="stat-card total">
          <span className="stat-number">{totalStudents}</span>
          <span className="stat-label">Total Students</span>
        </div>
        <div className="stat-card pass">
          <span className="stat-number">{passing}</span>
          <span className="stat-label">Passing</span>
        </div>
        <div className="stat-card fail">
          <span className="stat-number">{failing}</span>
          <span className="stat-label">Failing</span>
        </div>
      </div>

      <div className="main-content">
        <StudentTable
          students={students}
          onScoreChange={handleScoreChange}
          onRemove={handleRemove}
        />
        <AddStudentForm onAddStudent={handleAddStudent} />
      </div>
    </div>
  );
}

export default App;