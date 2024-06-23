import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../../assets/images";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../router";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "antd";
import { categoryStore } from "../../../store";
import { useEffect } from "react";

const Categories = () => {
  const { list, getList, listLoading } = categoryStore();
  useEffect(() => {
    getList({ page: 1, pageSize: 20 });
  }, []);
  return (
    <div className="wrapper">
      <Swiper
        className="mb-6"
        speed={1500}
        spaceBetween={5}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 12,
          },
          1000: {
            slidesPerView: 8,
          },
          767: {
            slidesPerView: 6,
          },
        }}
      >
        {listLoading ? (
          [...Array(12)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <Skeleton
                paragraph={{ rows: 0 }}
                className="w-full [&>div>h3]:!w-full [&>div]:!flex [&>div]:!items-center"
              />
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <Link
                to={APP_ROUTES.HOME}
                className="flex items-center gap-2 font-[600] text-[12.8px]"
              >
                <LazyLoadImage
                  src={ASSETS.union}
                  wrapperClassName="min-w-[24px] w-[24px] h-[24px]"
                  className="w-full h-full object-contain"
                  effect="opacity"
                  alt=""
                />
                Главная
              </Link>
            </SwiperSlide>
            {list?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link
                  to={APP_ROUTES.CATEGORY + `/${item.id}`}
                  className="anim-text whitespace-nowrap text-[12.8px] text-linkGray hover:text-black"
                >
                  <span>{item?.title}</span>
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
        {/* <div className="flex items-center gap-[30px] mb-6"> */}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default Categories;
