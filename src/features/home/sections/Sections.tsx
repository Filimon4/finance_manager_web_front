import { useNavigate } from "react-router";
import home from "/icons/home.png";
import bills from "/icons/bills.png";

const Sections = () => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  const onHistoryClick = () => {
    navigate("/operations");
  };

  return (
    <div className="flex w-full gap-5 py-2 justify-center items-center">
      <img
        src={home}
        className="h-[50px] cursor-pointer"
        alt="home button"
        onClick={() => onHomeClick()}
      />
      <img
        src={bills}
        className="h-[50px] cursor-pointer"
        alt="home button"
        onClick={() => onHistoryClick()}
      />
    </div>
  );
};

export default Sections;
