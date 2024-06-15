import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../../assets/images";
import Counter from "../../Counter/view";

const BasketCard = () => {
  return (
    <div className="flex gap-6 md:border border-[#A9A9A9] rounded-[8px] md:p-6">
      <LazyLoadImage
        wrapperClassName="rounded-[8px] shadow-card md:h-[200px] h-[85px] md:min-w-[215px] md:w-[215px] min-w-[85px] w-[85px]"
        className="h-full w-full object-contain"
        src={ASSETS.ring}
        effect="opacity"
        alt=""
      />
      <div className="flex max-md:flex-col justify-between w-full">
        <div className="md:pt-4 flex flex-col md:gap-2 gap-1">
          <div className="md:text-[22px] text-[14px] mb-2">
            Серебряное кольцо с алмазом
          </div>
          <div className="flex flex-col gap-2 max-md:hidden">
            <div className="text-[#1F2026]">Кратко о товаре:</div>
            <div className="text-[#1F2026]">Размер: 120 / 210</div>
            <div className="text-[#1F2026]">Вес:</div>
            <div className="text-[#1F2026]">Тип:</div>
            <div className="text-[#1F2026]">Проба:</div>
            <div className="text-[#1F2026]">Алмаз:</div>
          </div>
        </div>
        <div className="md:ml-auto flex flex-col md:items-end justify-between md:min-w-[20%] md:w-[20%]">
          <div className="md:text-[50px] text-[20px] font-[500] whitespace-nowrap md:pt-10 pt-4">
            100$
          </div>
          <Counter className="max-md:h-[32px] max-md:mt-2" />
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
