import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ASSETS } from "../../../assets/images";
import { HeartIcon } from "../../../utils/icons";
import "./card.scss";

const Card = () => {
  return (
    <Link
      to={"/product/1"}
      className={`group relative shadow-card hover:shadow-sm duration-200
       rounded-[8px] bg-white`}
    >
      <button className="group/heart absolute top-4 right-4 z-[1]">
        <HeartIcon className="group-hover/heart:[&>path]:fill-red" />
      </button>
      <LazyLoadImage
        src={ASSETS.ring}
        wrapperClassName="group/image h-[315px] w-full overflow-hidden"
        className="group-hover/image:scale-[1.05] w-full h-full object-contain duration-200"
        effect="opacity"
        alt=""
      />
      <div className="p-[12px]">
        <div className="text-[19px] text-[#1F2026] border-b border-[#EEEEEE] pb-1 leading-none">
          Золотое кольцо с алмазом
        </div>
        <div className="text-txtGray text-[11px] leading-none mt-1 h-[33px]">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-[33px] font-[500]">35$</div>
          <div className="cart-basket">
            <img src={ASSETS.cartBasket} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
