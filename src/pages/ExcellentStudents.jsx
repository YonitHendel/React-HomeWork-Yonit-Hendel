import { students } from "../data/students";
import StudentList from "../components/StudentList";

function ExcellentStudents() {
  const excellent = students.filter((s) => s.grade >= 90);

  return (
    <div>
      <h2>תלמידות מצטיינות</h2>
      <StudentList students={excellent} />
    </div>
  );
}

export default ExcellentStudents;