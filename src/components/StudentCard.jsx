function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance} שיעורים</p>

      {student.grade >= 90 && <span className="badge excellent">מצטיינת</span>}
      {student.grade < 60 && <span className="badge warning">נדרש שיפור</span>}

      <span className={student.active ? "badge active" : "badge inactive"}>
        {student.active ? "פעילה" : "לא פעילה"}
      </span>
    </div>
  );
}

export default StudentCard;