import { ASSETS } from "../../assets/images";

interface Props {
  className?: string;
}

const Counter = ({ className }: Props) => {
  return (
    <div
      className={`flex h-[40px] min-w-[120px] w-[120px] border border-border rounded-[4px] ${className}`}
    >
      <div className="min-w-[40px] w-[40px] h-full flex items-center justify-center hover:bg-light cursor-pointer rounded-[4px]">
        <img src={ASSETS.minus} alt="" />
      </div>
      <input
        type="number"
        className="w-full text-center h-full flex items-center justify-center"
        value={1}
      />
      <div className="min-w-[40px] w-[40px] h-full flex items-center justify-center hover:bg-light cursor-pointer rounded-[4px]">
        <img src={ASSETS.plus} alt="" />
      </div>
    </div>
  );
};

export default Counter;
