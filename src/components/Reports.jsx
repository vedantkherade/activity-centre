export default function Reports({ data }) {
  return (
    <div className="card">
      <div className="card-header card-header--space">
        <div className="card-titleWrap">
          <span className="card-icon card-icon--green">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </span>
          <div>
            <div className="card-title">Reports</div>
            <div className="card-subtitle">{data.length} reports</div>
          </div>
        </div>
      </div>

      <div className="tableWrap">
        <table className="appTable">
          <thead>
            <tr>
              <th>Entity</th>
              <th>Report</th>
              <th>Group</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="cellMain">{row.entity}</td>
                <td className="cellSubDark">{row.report}</td>
                <td className="cellSubDark">{row.group}</td>
                <td className="cellSubDark">{row.created}</td>
                <td>
                  <span
                    className={`pill ${
                      row.status === "Delivered"
                        ? "pill--green"
                        : "pill--gray"
                    }`}
                  >
                    <span className="pillDot" />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <span>Showing 1–{data.length} of {data.length}</span>
      </div>
    </div>
  );
}