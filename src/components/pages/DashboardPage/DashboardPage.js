import { Outlet } from 'react-router-dom';
import Sidebar from "../../ui/Layout/SideBar/Sidebar";


const DashboardPage = () => {
  return <div className="dashboard-container" style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ padding: "20px", flexGrow: 1 }}>
        <Outlet /> 
    </main>
  </div>;
};

export default DashboardPage;