import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ASSETS } from "../../../assets/images";
import { HeartIcon } from "../../../utils/icons";
import "./card.scss";
import { ProductType } from "../../../types";
import { BASE_URL } from "../../../config";
import { productsStore } from "../../../store";
import { HeartFilled } from "@ant-design/icons";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next";
import { AlertCard } from "..";
import { findMoneyType } from "../../../utils";

interface Props {
  card: ProductType;
}

const Card = ({ card }: Props) => {
  const { t } = useTranslation();
  const { toggleBasketCard, toggleFavoriteCard, favorites, basketCards } =
    productsStore();
  const inBasket = basketCards?.find((item) => item?.id === card?.id);
  const inFavorites = favorites?.find((item) => item?.id === card?.id);
  return (
    <Link
      to={`/product/${card.id}`}
      className={`group relative shadow-card hover:shadow-sm duration-200
       rounded-[8px] bg-white`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          if (inFavorites) {
            message.info({ content: t("successRemoveFromFavorites") });
          } else {
            message.success({ content: t("successAddToFavorites") });
          }
          toggleFavoriteCard(card);
        }}
        className="group/heart absolute top-4 right-4 z-[1]"
      >
        {favorites?.find((item) => item?.id === card?.id) ? (
          <HeartFilled className="[&>svg]:text-[21px] [&>svg]:fill-red" />
        ) : (
          <HeartIcon className="group-hover/heart:[&>path]:fill-red" />
        )}
      </button>
      <LazyLoadImage
        src={BASE_URL + card?.img}
        wrapperClassName="group/image md:h-[280px] h-[130px] w-full overflow-hidden"
        className="group-hover/image:scale-[1.05] w-full h-full object-contain duration-200"
        effect="opacity"
        alt=""
      />
      <div className="p-[12px]">
        <div className="md:text-[19px] text-[14px] text-[#1F2026] border-b border-[#EEEEEE] pb-1 leading-none">
          {card?.title}
        </div>
        <div className="line-clamp-3 text-txtGray text-[11px] leading-none mt-1 h-[33px]">
          {card?.discription}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="md:text-[33px] text-[24px] font-[500]">
            {card?.price?.toLocaleString("ru-RU")}{findMoneyType(card?.money_type)}
          </div>
          <button
            className={`cart-basket ${inBasket && "active"}`}
            onClick={(e) => {
              e.preventDefault();
              if (inBasket) {
                message.info({ content: t("successRemoveFromBasket") });
              } else {
                // message.success({ content: t("successAddToBasket") });
                notification.open({
                  message: <AlertCard card={card} />,
                  placement: "top",
                  showProgress: true,
                  className: "alert-card",
                });
              }
              toggleBasketCard(card, 1);
            }}
          >
            <img src={ASSETS.cartBasket} alt="" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
