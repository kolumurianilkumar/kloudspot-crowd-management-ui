const CrowdEntriesTable = ({ data }) => {
  return (
    <table className="entries-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Entry</th>
          <th>Exit</th>
          <th>Dwell Time</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="5" className="empty">
              No entries available
            </td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.sex}</td>
              <td>{row.entry}</td>
              <td>{row.exit || "--"}</td>
              <td>{row.dwellTime || "--"}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default CrowdEntriesTable;
