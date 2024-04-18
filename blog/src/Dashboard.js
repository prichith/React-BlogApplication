import "./App.css";
import DashboardFooter from "./components/DashboardFooter";
import DashboardHeader from "./components/DashboardHeader";
import FormAndPreview from "./components/FormAndPreview";

function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <FormAndPreview />
      <DashboardFooter />
    </>
  );
}

export default Dashboard;
