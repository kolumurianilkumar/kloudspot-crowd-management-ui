import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CrowdEntriesTable from "../components/CrowdEntriesTable";
import { getCrowdEntries } from "../api/crowdEntries.api";
import "../styles/dashboard.css";

const TOTAL_PAGES = 5; 

const CrowdEntries = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, [page]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const res = await getCrowdEntries({ page, limit: 10 });
      setData(res.data?.entries || []);
    } catch (error) {
      console.error("Crowd entries API failed", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
     
      <div className="dashboard-header">
        <h1 className="page-title">Overview</h1>
        <div className="header-spacer" />
        <button className="date-btn">Today</button>
      </div>

  
      <div className="card">
        {loading ? (
          <p style={{ padding: "20px" }}>Loading...</p>
        ) : (
          <CrowdEntriesTable data={data} />
        )}
      </div>

   
      <div className="pagination-wrapper">
        <div className="pagination-figma">
          <button
            className="page-arrow"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            &lt;
          </button>

          {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                className={`page-number ${
                  page === pageNum ? "active" : ""
                }`}
                onClick={() => setPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            className="page-arrow"
            disabled={page === TOTAL_PAGES}
            onClick={() => setPage(page + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CrowdEntries;
