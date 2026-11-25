import { useState, useEffect } from "react";
import { students } from "../data/students";
import Statistics from "../components/Statistics";
import StudentList from "../components/StudentList";
function Dashboard() {
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [search, setSearch] = useState("");
  const [showStats, setShowStats] = useState(true);

  const filtered = students
    .filter((s) => (showOnlyActive ? s.active : true))
    .filter((s) => s.name.includes(search));

    useEffect(() => {
  console.log("הדשבורד נטען");
}, []);

  return (
    <div className="dashboard">
      <button onClick={() => setShowStats(!showStats)}>
        {showStats ? "הסתר סטטיסטיקה" : "הצג סטטיסטיקה"}
      </button>

      {showStats && <Statistics students={students} />}

      <div className="controls">
        <input
          type="text"
          placeholder="חיפוש לפי שם"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setShowOnlyActive(true)}>פעילות בלבד</button>
        <button onClick={() => setShowOnlyActive(false)}>כל התלמידות</button>
      </div>

      <StudentList students={filtered} />
    </div>
  );
}

export default Dashboard;