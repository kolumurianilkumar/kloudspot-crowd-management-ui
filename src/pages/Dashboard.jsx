import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import DashboardLayout from "../layouts/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import OccupancyChart from "../components/OccupancyChart";
import DemographicsChart from "../components/DemographicsChart";
import DemographicsPie from "../components/DemographicsPie"; 

import {
  getLiveOccupancy,
  getTodayFootfall,
  getAvgDwellTime,
} from "../api/analytics.api";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [summary, setSummary] = useState({
    occupancy: null,
    footfall: null,
    dwell: null,
  });

  useEffect(() => {
    const fetchSummaryData = async () => {
      setLoading(true);

      try {
        const [footfallRes, dwellRes] = await Promise.all([
          getTodayFootfall(),
          getAvgDwellTime(),
        ]);

        setSummary((prev) => ({
          ...prev,
          footfall: footfallRes.data,
          dwell: dwellRes.data,
        }));
      } catch (err) {
        console.error("Footfall/Dwell API error", err);
      }

      try {
        const occupancyRes = await getLiveOccupancy();
        setSummary((prev) => ({
          ...prev,
          occupancy: occupancyRes.data,
        }));
      } catch (err) {
        setSummary((prev) => ({
          ...prev,
          occupancy: null,
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <DashboardLayout>
      
      <div className="dashboard-header">
        <h1 className="page-title">Overview</h1>
        <div className="header-spacer"></div>
        <button className="date-btn">Today</button>
      </div>

      <h3 className="section-title">Occupancy</h3>

     
      <div className="summary-grid">
        <SummaryCard
          title="Live Occupancy"
          value={loading ? "--" : summary.occupancy?.count ?? "--"}
          meta="Compared to yesterday"
          trend="up"
        />

        <SummaryCard
          title="Today's Footfall"
          value={loading ? "--" : summary.footfall?.footfall ?? "--"}
          meta="Compared to yesterday"
          trend="down"
        />

        <SummaryCard
          title="Avg Dwell Time"
          value={
            loading
              ? "--"
              : `${summary.dwell?.avgDwellMinutes ?? "--"} min`
          }
          meta="Compared to yesterday"
          trend="up"
        />
      </div>

      
      <div className="card">
        <h3>Overall Occupancy</h3>
        <OccupancyChart />
      </div>



      <h1 className="section-title">Demographics</h1>
    
      <div className="demographics">
       
        <div className="card">
          <h3>Chart of Demographics</h3>
          <DemographicsPie />
        </div>

        
        <div className="card">
          <h3>Demographics Analysis</h3>
          <DemographicsChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
