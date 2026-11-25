import { useSearchParams } from "react-router-dom";
import { students } from "../data/students";
import StudentList from "../components/StudentList";

function Students() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const active = searchParams.get("active") === "true";

  const filtered = students.filter(
    (s) => s.name.includes(search) && (!active || s.active)
  );

  return (
    <div>
      <h2>כל התלמידות</h2>

      <input
        placeholder="חיפוש לפי שם"
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value, active: active })}
      />

      <button onClick={() => setSearchParams({ search: search, active: !active })}>
        {active ? "הצג את כולן" : "פעילות בלבד"}
      </button>

      <StudentList students={filtered} />
    </div>
  );
}

export default Students;