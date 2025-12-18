import "./summaryCard.css";

const SummaryCard = ({ title, value, meta, trend }) => {
  return (
    <div className="summary-card">
      <div className="summary-title">{title}</div>

      <div className="summary-value">
        {value !== null && value !== undefined ? value : "--"}
      </div>

      {meta && (
        <div className={`summary-meta ${trend || ""}`}>
          <span className="trend-icon" />
          {meta}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
