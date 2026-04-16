export default function CapitalEvents({ data }) {
  return (
    <div className="card">
      <div className="card-header card-header--space">
        <div className="card-titleWrap">
          <span className="card-icon card-icon--gold">$</span>
          <div>
            <div className="card-title">Capital Events</div>
            <div className="card-subtitle">{data.length} events</div>
          </div>
        </div>

        <button className="btn btn--light">View all</button>
      </div>

      <div className="tableWrap">
        <table className="appTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fund</th>
              <th>Type</th>
              <th>Value Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="cellSubDark">{row.id}</td>
                <td className="cellMain">{row.fund}</td>
                <td className="cellSubDark">{row.type}</td>
                <td className="cellSubDark">{row.date}</td>
                <td>
                  <span className="pill pill--amber">
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