import { ChangeEvent } from "react";
import { ASSETS } from "../../assets/images";

interface Props {
  className?: string;
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  onMinus?: () => void;
  onPlus?: () => void;
  value?: number;
}

const Counter = ({
  className,
  onChangeValue,
  onMinus,
  onPlus,
  value,
}: Props) => {
  return (
    <div
      className={`flex h-[40px] min-w-[120px] w-[120px] border border-border rounded-[4px] ${className}`}
    >
      <div
        onClick={onMinus}
        className="max-md:bg-white min-w-[40px] w-[40px] h-full flex items-center justify-center md:hover:bg-light cursor-pointer rounded-[4px]"
      >
        <img src={ASSETS.minus} alt="" />
      </div>
      <input
        type="number"
        className="md:bg-white md:bg-transparent w-full text-center h-full flex items-center justify-center dark-theme-color"
        onChange={onChangeValue}
        value={value}
      />
      <div
        onClick={onPlus}
        className="max-md:bg-white min-w-[40px] w-[40px] h-full flex items-center justify-center md:hover:bg-light cursor-pointer rounded-[4px]"
      >
        <img src={ASSETS.plus} alt="" />
      </div>
    </div>
  );
};

export default Counter;
