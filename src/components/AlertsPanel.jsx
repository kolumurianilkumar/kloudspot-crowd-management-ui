import "./alerts.css";

const AlertsPanel = ({ alerts, onClose }) => {
  return (
    <div className="alerts-overlay">
      <div className="alerts-panel">
        <div className="alerts-header">
          <h3>Alerts</h3>
        <span className="alerts-close" onClick={onClose}>
    ✕
  </span>
        </div>

        <div className="alerts-list">
          {alerts.length === 0 && (
            <p className="no-alerts">No alerts available</p>
          )}

          {alerts.map((alert) => (
            <div key={alert.id} className="alert-card">
              <div>
                <p className="alert-time">{alert.timestamp}</p>
                <p>
                  <strong>{alert.name}</strong> {alert.action}
                </p>
                <p className="alert-zone">📍 {alert.zone}</p>
              </div>

              <span className={`alert-badge ${alert.severity.toLowerCase()}`}>
                {alert.severity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;
