import { Swiper, SwiperSlide } from "swiper/react";
import { BreadCrumb, Counter } from "../../components";
import { Autoplay, Navigation } from "swiper/modules";
import { Image } from "antd";
import { ASSETS } from "../../assets/images";
import "./detail.scss";
import { HeartIcon } from "../../utils/icons";
import { TabsDetail } from "./components";

const Detail = () => {
  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            {
              name: "Все категории",
              link: "1",
            },
            {
              name: "Дача, сад и огород",
              link: "1",
            },
            {
              name: "Антимоскитные сетки",
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
                  src={ASSETS.ring}
                  className="w-full h-full object-contain"
                  rootClassName="w-full h-[555px] rounded-[8px]"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={ASSETS.ring}
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
              <div className="ml-auto flex items-center gap-2 h-[40px] px-3 hover:bg-light rounded-[4px] cursor-pointer">
                <HeartIcon />В желания
              </div>
            </div>
            <div className="text-[22px] mt-4">Серебряное кольцо с алмазом</div>
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
            <Counter className="mt-2" />
            <div className="mt-6">Цена:</div>
            <div className="mt-2 text-[43px] font-[500]">100$</div>
            <div className="button w-[300px] mt-auto">Добавить в корзину</div>
          </div>
        </div>
      </div>
      <TabsDetail />
    </>
  );
};

export default Detail;
