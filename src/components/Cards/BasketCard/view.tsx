import { LazyLoadImage } from "react-lazy-load-image-component";
import Counter from "../../Counter/view";
import { ProductType } from "../../../types";
import { BASE_URL } from "../../../config";
import { useState } from "react";
import { productsStore } from "../../../store";
import { HiTrash } from "react-icons/hi2";
import { message } from "antd";
import { Link } from "react-router-dom";
import { findMoneyType } from "../../../utils";

interface Props {
  card: ProductType;
}

const BasketCard = ({ card }: Props) => {
  const [qtu, setQtu] = useState(card?.count || 1);
  const { setCount, toggleBasketCard } = productsStore();
  return (
    <div className="flex gap-6 md:border border-[#A9A9A9] rounded-[8px] md:p-6 relative">
      <Link to={`/product/${card?.id}`}>
        <LazyLoadImage
          wrapperClassName="rounded-[8px] shadow-card md:h-[200px] h-[85px] md:min-w-[215px] md:w-[215px] min-w-[85px] w-[85px]"
          className="h-full w-full object-contain"
          src={BASE_URL + card?.img}
          effect="opacity"
          alt=""
        />
      </Link>
      <div className="flex max-md:flex-col justify-between w-full">
        <div className="md:pt-4 flex flex-col md:gap-2 gap-1">
          <div className="md:text-[22px] text-[14px] mb-2 max-md:w-[80%]">
            {card?.title}
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
        <div className="md:ml-auto flex flex-col md:items-end justify-between md:min-w-[30%] md:w-[30%]">
          <div
            className="flex items-center gap-2 md:pt-4 cursor-pointer max-md:absolute top-[15px] right-[10px]"
            onClick={() => {
              message.success("Успешно удалено");
              toggleBasketCard(card);
            }}
          >
            <HiTrash className="fill-txtGray md:text-[22px] text-[30px]" />
            <span className="text-txtGray text-[14px] max-md:hidden leading-none">
              Удалить
            </span>
          </div>
          <div className="md:text-[50px] text-[20px] font-[500] whitespace-nowrap">
            {card?.price?.toLocaleString("ru-RU")}
            {findMoneyType(card?.money_type)}
          </div>
          <Counter
            onMinus={() => {
              if (qtu > 1) {
                setQtu((prev) => prev - 1);
                setCount(card, Number(card?.count) - 1);
              } else {
                toggleBasketCard(card);
              }
            }}
            onPlus={() => {
              setQtu((prev) => prev + 1);
              setCount(card, Number(card?.count) + 1);
            }}
            value={card?.count || 1}
            onChangeValue={(e) => setQtu(Number(e.target.value))}
            className="max-md:h-[32px] max-md:mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
