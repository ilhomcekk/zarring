import { Swiper, SwiperSlide } from "swiper/react";
import { BreadCrumb, Counter, PageLoading } from "../../components";
import { Autoplay, Navigation } from "swiper/modules";
import { Image, message, notification } from "antd";
import "./detail.scss";
import { HeartIcon } from "../../utils/icons";
import { TabsDetail } from "./components";
import { useParams } from "react-router-dom";
import { productsStore } from "../../store";
import { useEffect, useState } from "react";
import { HeartFilled } from "@ant-design/icons";
import { BASE_URL } from "../../config";
import { useTranslation } from "react-i18next";
import { AlertCard } from "../../components/Cards";
import i18n from "../../../i18n";
import { findMoneyType } from "../../utils";

const Detail = () => {
  const { t } = useTranslation();
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
              name:
                `${
                  i18n.language === "uz" ? detail?.title_ru : detail?.title_uz
                }` || "",
            },
          ]}
        />
        <div className="flex max-lg:flex-col gap-x-24 gap-y-6">
          <div className="lg:min-w-[510px] lg:w-[510px] lg:sticky top-[120px] h-max">
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
                  className="w-full !h-full object-contain"
                  rootClassName="w-full lg:h-[555px] md:h-[450px] h-[300px] rounded-[8px]"
                  alt=""
                />
              </SwiperSlide>
              {Array.isArray(detail?.gallery) &&
                detail?.gallery?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={BASE_URL + item}
                      className="w-full !h-full object-contain"
                      rootClassName="w-full lg:h-[555px] md:h-[450px] h-[300px] rounded-[8px]"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center">
              {/* <div className="text-breadGray text-[13px]">
                Более 700 заказов
              </div> */}
              <div
                onClick={() => toggleFavoriteCard(detail)}
                className="ml-auto flex items-center gap-2 h-[40px] px-3 hover:bg-light rounded-[4px] cursor-pointer"
              >
                {favorites?.find((item) => item?.id === detail?.id) ? (
                  <>
                    <HeartFilled className="[&>svg]:fill-red [&>svg]:text-[21px]" />
                    {t("intoDesires")}
                  </>
                ) : (
                  <>
                    <HeartIcon />
                    {t("intoDesire")}
                  </>
                )}
              </div>
            </div>
            <div className="text-[22px] mt-4">{`${
              i18n.language === "uz" ? detail?.title_ru : detail?.title_uz
            }`}</div>
            {/* <div className="mt-6 flex items-center gap-2 cursor-pointer">
              Доставка: <img src={ASSETS.info} alt="" />
            </div> */}
            {detail?.characteristic?.length > 0 ? (
              <div className="flex flex-col gap-3 mt-6 pt-3 border-t border-border">
                <div>Кратко о товаре:</div>
                {detail?.characteristic?.map((item, idx) => (
                  <div key={idx}>
                    {item.label}: {item.value}
                  </div>
                ))}
              </div>
            ) : null}
            <div className="mt-6">{t("amount")}:</div>
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
            {/* <div className="text-[18px] text-green font-[500] mt-2">
              {count} {t("product")}:{" "}
              {(count * detail?.price)?.toLocaleString("ru-RU")}$
            </div> */}
            {detail?.price !== 0 && (
              <>
                <div className="mt-6">{t("price")}:</div>
                <div className="mt-2 text-[43px] font-[500]">
                  {(count * detail?.price)?.toLocaleString("ru-RU")}
                  {findMoneyType(detail?.money_type)}
                </div>
              </>
            )}
            {detail?.price !== 0 && (
              <div className="mt-2 text-[18px] text-green max-md:mb-2">
                {detail?.price?.toLocaleString("ru-RU")}
                {findMoneyType(detail?.money_type)} - сумма единого товар
              </div>
            )}
            <div
              className={`button ${inBasket && "!bg-red"} w-[300px] mt-auto`}
              onClick={() => {
                if (inBasket) {
                  message.info({ content: t("successRemoveFromBasket") });
                } else {
                  notification.open({
                    message: <AlertCard card={detail} />,
                    placement: "top",
                    showProgress: true,
                    className: "alert-card",
                  });
                }
                toggleBasketCard(detail, count);
              }}
            >
              {basketCards?.find((item) => item?.id === detail?.id)
                ? t("inBasket")
                : t("addToBasket")}
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
