import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
        דשבורד
      </NavLink>
      <NavLink to="/students" className={({ isActive }) => (isActive ? "active-link" : "")}>
        כל התלמידות
      </NavLink>
      <NavLink to="/excellent" className={({ isActive }) => (isActive ? "active-link" : "")}>
        תלמידות מצטיינות
      </NavLink>
    </nav>
  );
}

export default Sidebar;