import { LazyLoadImage } from "react-lazy-load-image-component";
import { ProductType } from "../../../types";
import { BASE_URL } from "../../../config";
import { findMoneyType } from "../../../utils";

interface Props {
  card: ProductType;
}

const AlertCard = ({ card }: Props) => {
  return (
    <div className="flex gap-4">
      <LazyLoadImage
        wrapperClassName="min-w-[80px] w-[80px] h-[80px]"
        className="w-full h-full object-contain"
        src={BASE_URL + card?.img || ""}
        alt=""
      />
      <div className="flex flex-col gap-2 pt-4">
        <div className="text-[18px] font-[500]">{card?.title}</div>
        <div className="text-[20px] font-[600] text-txtGray">
          {card?.price ? card?.price?.toLocaleString("ru-RU") : "Договорная"}
          {card?.price ? findMoneyType(card?.money_type) : ""}
        </div>
      </div>
      {/* <div className="ml-auto">
        <div
          className="mt-auto text-[20px] text-red underline underline-offset-1"
          onClick={() => navigate(APP_ROUTES.BASKET)}
        >
          Перейти в корзину
        </div>
        <Link to={APP_ROUTES.BASKET}>Перейти в корзину</Link>
      </div> */}
    </div>
  );
};

export default AlertCard;
