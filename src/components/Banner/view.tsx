import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./banner.scss";
// import { Shimmer } from "react-shimmer";
import { Image, Skeleton } from "antd";
import { bannerStore } from "../../store";
import { useEffect } from "react";
import { BASE_URL } from "../../config";

const Banner = () => {
  const { getList, list, listLoading } = bannerStore();

  useEffect(() => {
    getList();
  }, []);
  return (
    <Swiper
      navigation
      // pagination={{
      //   clickable: true,
      // }}
      className="swiper-arrow rounded-[12px]"
      loop
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        0: {
          spaceBetween: 30,
        },
      }}
    >
      {listLoading ? (
        <SwiperSlide>
          <Skeleton
            paragraph={{ rows: 0 }}
            className="md:h-[420px] h-[185px] [&>div>h3]:!h-full [&>div>h3]:!w-full"
          />
        </SwiperSlide>
      ) : (
        list?.map((item, idx) => (
          <SwiperSlide key={idx} className="cursor-pointer">
            <div className="block md:h-[420px] h-[185px]">
              <Image
                className="!rounded-[12px] !h-full object-cover"
                rootClassName="h-full w-full"
                src={BASE_URL + item?.dataValues?.img}
              >
                <LazyLoadImage
                  effect="opacity"
                  src={BASE_URL + item?.dataValues?.img}
                  alt=""
                  className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[12px]"
                  wrapperClassName="w-full h-full"
                />
              </Image>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default Banner;
