import React from "react";
import "../styles/header.css";

const navItems = [
  "NAV Workflows",
  "Other Workflows",
  "Capital Events",
  "Reports",
  "Payments",
];

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-logoBox">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="5" height="5" rx="1.2" fill="white" />
            <rect x="11" y="2" width="5" height="5" rx="1.2" fill="white" />
            <rect x="2" y="11" width="5" height="5" rx="1.2" fill="white" />
            <rect x="11" y="11" width="5" height="5" rx="1.2" fill="white" />
          </svg>
        </div>

        <div className="topbar-title">Activity Centre</div>
      </div>

      <nav className="topbar-nav">
        {navItems.map((item, index) => (
          <button
            key={item}
            className={`topbar-navItem ${index === 0 ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="topbar-right">
        <button className="datePicker">
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
            <rect x="3" y="4" width="18" height="18" rx="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>01 Dec 2023 — 01 Apr 2026</span>
        </button>

        <div className="topbar-avatar">JD</div>
      </div>
    </header>
  );
}