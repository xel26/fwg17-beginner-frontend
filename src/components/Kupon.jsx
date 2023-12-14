import GreenKuponStiker from "../assets/media/stiker-kupon-hijau.png"
import YellowKuponStiker from "../assets/media/stiker-kupon-kuning.png"

const Kupon = ({title, description, klaim, bg}) => {
  return (
    <div className={`flex bg-[${bg}] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto`}>
      <div>
        <img
          className="h-20 sm:h-24 translate-y-1"
          src={klaim ? GreenKuponStiker : YellowKuponStiker}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className={`flex flex-col ${klaim ? 'gap-0' : 'gap-3'}`}>
          <h5 className="text-xs sm:text-sm font-bold">{title}</h5>
          <p className="text-[0.7rem] sm:text-xs">{description}</p>
        </div>
        {klaim ? <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p> : ''}
      </div>
    </div>
  );
};

export default Kupon