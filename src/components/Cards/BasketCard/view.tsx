import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../../assets/images";
import Counter from "../../Counter/view";

const BasketCard = () => {
  return (
    <div className="flex gap-6 border border-[#A9A9A9] rounded-[8px] p-6">
      <LazyLoadImage
        wrapperClassName="rounded-[8px] shadow-card h-[200px] min-w-[215px] w-[215px]"
        className="h-full w-full object-contain"
        src={ASSETS.ring}
        effect="opacity"
        alt=""
      />
      <div className="pt-4 flex flex-col gap-2">
        <div className="text-[22px] mb-2">Серебряное кольцо с алмазом</div>
        <div className="text-[#1F2026]">Кратко о товаре:</div>
        <div className="text-[#1F2026]">Размер: 120 / 210</div>
        <div className="text-[#1F2026]">Вес:</div>
        <div className="text-[#1F2026]">Тип:</div>
        <div className="text-[#1F2026]">Проба:</div>
        <div className="text-[#1F2026]">Алмаз:</div>
      </div>
      <div className="ml-auto flex flex-col items-end justify-between min-w-[20%] w-[20%]">
        <div className="text-[50px] font-[500] whitespace-nowrap pt-10">100$</div>
        <Counter />
      </div>
    </div>
  );
};

export default BasketCard;
