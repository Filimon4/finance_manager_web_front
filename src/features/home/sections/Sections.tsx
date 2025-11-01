import { useNavigate } from "react-router";
import home from "/icons/home.png";

const Sections = () => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex w-full gap-5 py-2 justify-center items-center">
      <img
        src={home}
        className={`h-[50px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-[15deg]`}
        alt="home button"
        onClick={() => onHomeClick()}
      />
    </div>
  );
};

export default Sections;
