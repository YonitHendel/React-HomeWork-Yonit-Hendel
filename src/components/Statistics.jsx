function Statistics({ students }) {
  const total = students.length;
  const activeCount = students.filter((s) => s.active).length;
  const average =
    total === 0
      ? 0
      : (students.reduce((sum, s) => sum + s.grade, 0) / total).toFixed(1);

  return (
    <div className="statistics">
      <div className="stat">סה"כ תלמידות: {total}</div>
      <div className="stat">פעילות: {activeCount}</div>
      <div className="stat">ממוצע ציונים: {average}</div>
    </div>
  );
}

export default Statistics;