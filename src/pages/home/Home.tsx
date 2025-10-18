import Dashboard from "@/widgets/home/dashboard/Dashboard";
import Profile from "@/widgets/home/profile/Profile";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full px-10">
        <div className="w-full h-full flex justify-center items-center flex-1">
          <Profile />
        </div>
        <div className="w-full h-full flex justify-center items-center flex-1">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Home;
