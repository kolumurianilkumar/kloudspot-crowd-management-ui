import { useEffect, useState } from "react";
import { socket } from "../services/socket";

const useAlertsSocket = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("✅ Alerts socket connected");
    });

    socket.on("alert", (alert) => {
      
      setAlerts((prev) => [alert, ...prev]);
    });

    socket.on("disconnect", () => {
      console.log("❌ Alerts socket disconnected");
    });

    return () => {
      socket.off("alert");
      socket.disconnect();
    };
  }, []);

  return alerts;
};

export default useAlertsSocket;
