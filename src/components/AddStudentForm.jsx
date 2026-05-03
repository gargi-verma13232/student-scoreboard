import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || score === "") {
      alert("Please fill in both fields!");
      return;
    }

    if (score < 0 || score > 100) {
      alert("Score must be between 0 and 100!");
      return;
    }

    onAddStudent(name.trim(), Number(score));

    // Clear form after submission
    setName("");
    setScore("");
  };

  return (
    <div className="form-wrapper">
      <h2>➕ Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Score (0 - 100)</label>
          <input
            type="number"
            placeholder="Enter score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="form-input"
            min="0"
            max="100"
          />
        </div>
        <button type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;