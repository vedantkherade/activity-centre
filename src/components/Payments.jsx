export default function Payments({ data }) {
  return (
    <div className="card">
      <div className="card-header card-header--space">
        <div className="card-titleWrap">
          <span className="card-icon card-icon--purple">
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
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </span>
          <div>
            <div className="card-title">Payments</div>
            <div className="card-subtitle">{data.length} payments</div>
          </div>
        </div>
      </div>

      <div className="tableWrap">
        <table className="appTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Value Date</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="cellSubDark">{row.id}</td>
                <td className="cellMain">{row.type}</td>
                <td className="cellSubDark">{row.date}</td>
                <td className="cellMain amountCell">₹ {row.amount}</td>
                <td className="cellSubDark">test</td>
                <td>
                  <span className="pill pill--blue">
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