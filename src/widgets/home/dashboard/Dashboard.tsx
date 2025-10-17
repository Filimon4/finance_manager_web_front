import DashboardCard from "@/components/ui/dashboardCard";
import Sections from "@/features/home/sections/Sections";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-full py-20">
      <div className="w-full flex justify-center items-center">
        <Sections />
      </div>
      <div className="w-full flex justify-center items-center flex-1">
        <DashboardCard className="w-full h-full" />
      </div>
    </div>
  );
};

export default Dashboard;
