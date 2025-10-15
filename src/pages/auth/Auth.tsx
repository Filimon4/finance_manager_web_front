import { Outlet } from "react-router";
import logo from "/telegram_finasist_bot_logo 1.svg";

const Auth = () => {
  return (
    <div className="w-full h-full flex justify-between items-center px-20 gap-10">
      <div className="flex-1">
        <img
          src={logo}
          alt="Logo of application"
          className="max-w-[400px] m-auto"
        />
      </div>
      <div className="w-full h-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
