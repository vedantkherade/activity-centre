export default function OtherWorkflows({ data }) {
  return (
    <div className="card">
      <div className="card-header card-header--space">
        <div className="card-titleWrap">
          <span className="card-icon card-icon--neutral">
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
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>
          <div>
            <div className="card-title">Other Workflows</div>
            <div className="card-subtitle">{data.length} workflows</div>
          </div>
        </div>
      </div>

      <div className="tableWrap">
        <table className="appTable">
          <thead>
            <tr>
              <th>Fund</th>
              <th>Name</th>
              <th>Value Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>
                  <div className="cellMain">{row.fund}</div>
                  <div className="cellSub">{row.type}</div>
                </td>
                <td className="cellMain">{row.name}</td>
                <td className="cellSubDark">{row.date}</td>
                <td>
                  <div className="pillGroup">
                    {row.status.map((s, idx) => (
                      <span
                        key={idx}
                        className={`pill ${
                          s === "CAS Reports" ? "pill--green" : "pill--gray"
                        }`}
                      >
                        <span className="pillDot" />
                        {s}
                        {s === "CAS Reports" ? " ✓" : ""}
                      </span>
                    ))}
                  </div>
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