import { useParams, useNavigate } from "react-router-dom";
import { students } from "../data/students";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div>
        <h2>תלמידה לא נמצאה</h2>
        <button onClick={() => navigate("/students")}>חזרה לרשימה</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance} שיעורים</p>
      <p>מצב: {student.active ? "פעילה" : "לא פעילה"}</p>

      {student.grade >= 90 && <p>מצטיינת</p>}
      {student.grade < 60 && <p>נדרש שיפור</p>}

      <button onClick={() => navigate("/students")}>חזרה לרשימה</button>
      <button onClick={() => navigate("/")}>חזרה לדשבורד</button>
    </div>
  );
}

export default studentDetails;