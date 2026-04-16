import data from "../data/data.json";
import Topbar from "../components/Topbar";
import FilterBar from "../components/FilterBar";
import NavOverviewTable from "../components/NavOverviewTable";
import OtherWorkflows from "../components/OtherWorkflows";
import CapitalEvents from "../components/CapitalEvents";
import Reports from "../components/Reports";
import Payments from "../components/Payments";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Topbar />
      <FilterBar />

      <main className="page">
        <NavOverviewTable data={data.navWorkflows} />

        <div className="grid-2">
          <OtherWorkflows data={data.otherWorkflows} />
          <CapitalEvents data={data.capitalEvents} />
        </div>

        <div className="section">
          <Reports data={data.reports} />
        </div>

        <div className="section">
          <Payments data={data.payments} />
        </div>
      </main>
    </>
  );
}