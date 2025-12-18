import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
    
      <div className="sidebar-header">
        <span className="logo-text">kloudspot</span>
        <span className="menu-icon">☰</span>
      </div>

    
      <nav className="sidebar-nav">
      
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <svg
            className="nav-svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11L12 3L21 11" />
            <path d="M5 10V20H19V10" />
          </svg>
          <span className="nav-text">Overview</span>
        </NavLink>

      
        <NavLink
          to="/entries"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <svg
            className="nav-svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3V21" />
            <path d="M3 9H21" />
          </svg>
          <span className="nav-text">Crowd Entries</span>
        </NavLink>
      </nav>

    
      <div className="sidebar-footer">
        <span className="nav-icon">⏻</span>
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
