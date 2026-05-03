import StudentRow from "./StudentRow";

function StudentTable({ students, onScoreChange, onRemove }) {
  return (
    <div className="table-wrapper">
      <div className="table-header-bar">
        <span className="table-title">STUDENT RECORDS</span>
        <span className="entry-count">{students.length} entries</span>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              index={index + 1}
              student={student}
              onScoreChange={onScoreChange}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;