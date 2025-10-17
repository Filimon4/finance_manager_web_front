import { useNavigate } from "react-router";
import home from "/icons/home.png";

const Sections = () => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex w-full gap-5 py-2 justify-evenly">
      <img
        src={home}
        className="h-[50px] cursor-pointer"
        alt="home button"
        onClick={() => onHomeClick()}
      />
    </div>
  );
};

export default Sections;
