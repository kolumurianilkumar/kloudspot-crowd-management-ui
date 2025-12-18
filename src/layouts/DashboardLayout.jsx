import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  
  const isCrowdEntries = location.pathname === "/entries";

  return (
    <div className="dashboard-root">
      <Sidebar />

      <div className="main-area">
   
        <Navbar className={isCrowdEntries ? "navbar--compact" : ""} />

        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
