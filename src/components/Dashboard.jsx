import { useState } from "react";
import { students } from "../data/students";
import Header from "./Header";
import Statistics from "./Statistics";
import StudentList from "./StudentList";

function Dashboard() {
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [search, setSearch] = useState("");
  const [showStats, setShowStats] = useState(true);

  const filtered = students
    .filter((s) => (showOnlyActive ? s.active : true))
    .filter((s) => s.name.includes(search));

  return (
    <div className="dashboard">
      <Header />

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