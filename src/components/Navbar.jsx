import { useState } from "react";
import "./Navbar.css";
import AlertsPanel from "./AlertsPanel";
import useAlertsSocket from "../hooks/useAlertsSocket";

const Navbar = ({ className = "" }) => {
  const [showAlerts, setShowAlerts] = useState(false);

 
  const alerts = useAlertsSocket();

  return (
    <>
      <header className={`navbar ${className}`}>
        <div className="navbar-inner">
         
          <div className="navbar-left">
            <span className="navbar-title">Crowd Solutions</span>
            <span className="navbar-separator">|</span>

            <div className="location-dropdown">
              <svg
                className="location-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  fill="#000"
                />
              </svg>

              <span className="location-text">Avenue Mall</span>
              <span className="chevron">⌄</span>
            </div>
          </div>

          
          <div className="navbar-right">
            <div className="lang-pill">En</div>

            
            <div
              className="bell"
              onClick={() => setShowAlerts(true)}
              style={{ cursor: "pointer" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M12 24a2.4 2.4 0 002.4-2.4h-4.8A2.4 2.4 0 0012 24zm6.7-6V11c0-3.1-1.6-5.7-4.4-6.4V4a2.3 2.3 0 10-4.6 0v.6C6.9 5.3 5.3 7.9 5.3 11v7L3 20v1h18v-1l-2.3-2z"
                  fill="#000"
                />
              </svg>

              
              {alerts.length > 0 && <span className="dot" />}
            </div>

            <div className="avatar" />
          </div>
        </div>
      </header>

      
      {showAlerts && (
        <AlertsPanel
          alerts={alerts}
          onClose={() => setShowAlerts(false)}
        />
      )}
    </>
  );
};

export default Navbar;
