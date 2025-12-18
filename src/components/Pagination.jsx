const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
    
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        &lt;
      </button>

   
      {[...Array(totalPages)].map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            className={`page-btn ${page === p ? "active" : ""}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        );
      })}

     
      <button
        className="page-btn"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
