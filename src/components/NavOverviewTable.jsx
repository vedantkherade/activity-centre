import { LinearProgress } from "@mui/material";

export default function NavOverviewTable({ data }) {
  return (
    <div className="card card--large">
      <div className="card-header card-header--space">
        <div className="card-titleWrap">
          <span className="card-icon card-icon--blue">
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
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </span>
          <div>
            <div className="card-title">NAV Overview</div>
            <div className="card-subtitle">{data.length} workflows</div>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn btn--light">Export</button>
          <button className="btn btn--primary">+ New workflow</button>
        </div>
      </div>

      <div className="tableWrap">
        <table className="appTable">
          <thead>
            <tr>
              <th>Fund & Entity</th>
              <th>Workflow</th>
              <th>Value Date</th>
              <th>Progress</th>
              <th>Status Checkpoints</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>
                  <div className="cellMain">{row.fund}</div>
                  <div className="cellSub">{row.entity}</div>
                </td>

                <td className="cellMain">{row.workflow}</td>
                <td className="cellSubDark">{row.date}</td>

                <td>
                  <div className="progressCell">
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      sx={{
                        height: 6,
                        borderRadius: 999,
                        backgroundColor: "#e5e7eb",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 999,
                          backgroundColor:
                            row.progress >= 70
                              ? "#16a34a"
                              : row.progress >= 50
                              ? "#d97706"
                              : "#2563eb",
                        },
                      }}
                    />
                    <span className="progressText">{row.progress}%</span>
                  </div>
                </td>

                <td>
                  <div className="pillGroup">
                    {row.status.map((s, idx) => (
                      <span
                        key={idx}
                        className={`pill ${
                          s.type === "done"
                            ? "pill--green"
                            : s.type === "warn"
                            ? "pill--amber"
                            : "pill--gray"
                        }`}
                      >
                        <span className="pillDot" />
                        {s.label}
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
        <span>Showing 1–{data.length} of {data.length} workflows</span>
      </div>
    </div>
  );
}