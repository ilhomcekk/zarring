import { Swiper, SwiperSlide } from "swiper/react";
import { BreadCrumb, Counter, PageLoading } from "../../components";
import { Autoplay, Navigation } from "swiper/modules";
import { Image, message } from "antd";
import { ASSETS } from "../../assets/images";
import "./detail.scss";
import { HeartIcon } from "../../utils/icons";
import { TabsDetail } from "./components";
import { useParams } from "react-router-dom";
import { productsStore } from "../../store";
import { useEffect, useState } from "react";
import { HeartFilled } from "@ant-design/icons";
import { BASE_URL } from "../../config";

const Detail = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const {
    getDetail,
    detail,
    detailLoading,
    toggleFavoriteCard,
    favorites,
    toggleBasketCard,
    basketCards,
  } = productsStore();
  const inBasket = basketCards?.find((item) => item?.id === detail?.id);
  useEffect(() => {
    if (id) {
      getDetail(id);
    }
  }, [id]);
  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            // {
            //   name: "Все категории",
            //   link: "1",
            // },
            // {
            //   name: "Дача, сад и огород",
            //   link: "1",
            // },
            {
              name: detail?.title || "",
            },
          ]}
        />
        <div className="flex gap-x-24">
          <div className="min-w-[510px] w-[510px] sticky top-[120px] h-max">
            <Swiper
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              navigation
              modules={[Navigation, Autoplay]}
              className="w-full shadow-card rounded-[8px] product-swiper"
            >
              <SwiperSlide>
                <Image
                  src={BASE_URL + detail?.img}
                  className="w-full h-full object-contain"
                  rootClassName="w-full h-[555px] rounded-[8px]"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center">
              <div className="text-breadGray text-[13px]">
                Более 700 заказов
              </div>
              <div
                onClick={() => toggleFavoriteCard(detail)}
                className="ml-auto flex items-center gap-2 h-[40px] px-3 hover:bg-light rounded-[4px] cursor-pointer"
              >
                {favorites?.find((item) => item?.id === detail?.id) ? (
                  <>
                    <HeartFilled className="[&>svg]:fill-red [&>svg]:text-[21px]" />
                    В желание
                  </>
                ) : (
                  <>
                    <HeartIcon />В желания
                  </>
                )}
              </div>
            </div>
            <div className="text-[22px] mt-4">{detail?.title}</div>
            <div className="mt-6 flex items-center gap-2 cursor-pointer">
              Доставка: <img src={ASSETS.info} alt="" />
            </div>
            <div className="flex flex-col gap-3 mt-6 pt-3 border-t border-border">
              <div>Кратко о товаре:</div>
              <div>Размер: 120 / 210</div>
              <div>Вес:</div>
              <div>Проба:</div>
            </div>
            <div className="mt-6">Количество:</div>
            <Counter
              onMinus={() => {
                if (count > 1) {
                  setCount((prev) => prev - 1);
                }
              }}
              onPlus={() => {
                setCount((prev) => prev + 1);
              }}
              value={count}
              onChangeValue={(e) => setCount(Number(e.target.value))}
              className="mt-2"
            />
            <div className="mt-6">Цена:</div>
            <div className="mt-2 text-[43px] font-[500]">
              {detail?.price?.toLocaleString("ru-RU")}$
            </div>
            <div
              className="button w-[300px] mt-auto"
              onClick={() => {
                if (inBasket) {
                  message.success({ content: "Успешно добавлено в корзину" });
                } else {
                  message.info({ content: "Успешно удалено" });
                }
                toggleBasketCard(detail, count);
              }}
            >
              {basketCards?.find((item) => item?.id === detail?.id)
                ? "В корзине"
                : "Добавить в корзину"}
            </div>
          </div>
        </div>
      </div>
      <TabsDetail />
      <PageLoading loading={detailLoading} />
    </>
  );
};

export default Detail;
