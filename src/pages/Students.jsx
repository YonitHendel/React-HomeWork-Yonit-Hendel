import { students } from "../data/students";
import StudentList from "../components/StudentList";

function Students() {
  return (
    <div>
      <h2>כל התלמידות</h2>
      <StudentList students={students} />
    </div>
  );
}

export default Students;