import upBorderd from "/up_bordered.svg";
import downBorderd from "/down_bordered.svg";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[200px]">
      <div>
        <div className="flex justify-center items-center gap-2 flex-col">
          <p className="text-xl">Баланс</p>
          <p className="flex gap-2 text-2xl">
            <span>{123}</span> {"₽"}
          </p>
        </div>
      </div>
      <div className="w-full h-[3px] bg-black rounded-4xl" />
      <div className="w-full flex justify-between">
        <div className="flex justify-center items-center flex-col">
          <p>Расход</p>
          <div className="flex justify-between items-center gap-5">
            <img src={upBorderd} alt="up_bordered" className="w-[30px]" />
            <p>{100}</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p>Доход</p>
          <div className="flex justify-between items-center gap-5">
            <img src={downBorderd} alt="up_bordered" className="w-[30px]" />
            <p>{100}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
