import { useState, useEffect } from "react";

function StudentRow({ index, student, onScoreChange, onRemove }) {
  const [inputScore, setInputScore] = useState(student.score);
  const isPassing = student.score >= 40;

  useEffect(() => {
    setInputScore(student.score);
  }, [student.score]);

  const handleSave = () => {
    if (inputScore < 0 || inputScore > 100) {
      alert("Score must be between 0 and 100!");
      return;
    }
    onScoreChange(student.id, inputScore);
  };

  const handleRemove = () => {
    onRemove(student.id);
  };

  return (
    <tr className={isPassing ? "row-pass" : "row-fail"}>
      <td>{index}</td>
      <td>{student.name}</td>
      <td className={isPassing ? "score-value pass-score" : "score-value fail-score"}>
        {student.score}
      </td>
      <td>
        <span className={isPassing ? "badge pass" : "badge fail"}>
          <span className="dot"></span>
          {isPassing ? "PASS" : "FAIL"}
        </span>
      </td>
      <td className="update-cell">
        <input
          type="number"
          value={inputScore}
          onChange={(e) => setInputScore(Number(e.target.value))}
          className="score-input"
          min="0"
          max="100"
        />
        <button className="btn-save" onClick={handleSave}>
          SAVE
        </button>
        <button className="btn-remove" onClick={handleRemove}>
          ✕
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;