import { Link } from "react-router-dom";
import { ASSETS } from "../../../assets/images";
import { APP_ROUTES } from "../../../router";

interface Props {
  active?: boolean;
  title?: string | null;
  id?: string | number;
  withArrow?: boolean;
  className?: string;
}

const CategoryItem = ({ active, withArrow, title, id, className }: Props) => {
  return (
    <div className={`inline w-max max-w-full ${className}`}>
      <Link
        className={`${
          active && "bg-[#f4f5f5] dark-theme-color"
        } flex items-center gap-[2px] leading-[1.25] font-500 text-sm text-[#212121] hover:bg-[#f4f5f5] duration-200 rounded-[4px] px-[6px] py-[8px]`}
        to={APP_ROUTES.CATEGORY + `/${id}`}
      >
        {withArrow && (
          <img
            src={ASSETS.arrowBlack}
            className="min-w-[6px] rotate-[180deg] mr-2"
            alt=""
          />
        )}
        {title}
        {/* <span className="font-500 text-[#9fa4b5] ml-1">40</span> */}
      </Link>
    </div>
  );
};

export default CategoryItem;
