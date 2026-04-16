import React from "react";
import "../styles/header.css";

const fundFilters = [
  "All funds",
  "EBBR Holdings",
  "Steerhead NL",
  "EBBR Rep III",
  "EBBR Fund I",
];

const statusFilters = ["Pending action", "At risk"];

export default function FilterBar() {
  return (
    <div className="filterbar">
      <div className="filterbar-left">
        <div className="filterbar-chips">
          {fundFilters.map((item, index) => (
            <button
              key={item}
              className={`chip ${index === 0 ? "chip--active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="filterbar-divider" />

        <div className="filterbar-chips">
          {statusFilters.map((item) => (
            <button key={item} className="chip chip--muted">
              <span className="chip-icon">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 8v4l2.5 2.5"></path>
                </svg>
              </span>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filterbar-right">
        <div className="searchBox">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search workflows..." />
        </div>
      </div>
    </div>
  );
}