import { DashboardCard } from "@/components/ui/card";
import Sections from "@/features/home/sections/Sections";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-full py-20">
      <div className="w-full flex justify-center items-center flex-1 overflow-hidden">
        <DashboardCard className="w-full h-full overflow-y-scroll">
          <Outlet />
        </DashboardCard>
      </div>
      <div className="w-full flex justify-center items-centers ">
        <Sections />
      </div>
    </div>
  );
};

export default Dashboard;
