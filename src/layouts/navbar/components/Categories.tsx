import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../../router";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "antd";
import { categoryStore } from "../../../store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();
  const { list, getList, listLoading } = categoryStore();
  const { pathname } = useLocation();
  const activeCategory = pathname?.substring(pathname?.lastIndexOf("/") + 1);

  useEffect(() => {
    getList({ page: 1, pageSize: 20 });
  }, []);
  return (
    <div className="wrapper max-md:hidden">
      <Swiper
        className="mb-6 max-md:mt-[3rem]"
        speed={1500}
        spaceBetween={30}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // breakpoints={{
        //   1200: {
        //     slidesPerView: "auto",
        //   },
        //   1000: {
        //     slidesPerView: 8,
        //   },
        //   767: {
        //     slidesPerView: 6,
        //   },
        //   0: {
        //     slidesPerView: 3,
        //   },
        // }}
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
            <SwiperSlide className="flex-[1]">
              <Link
                to={APP_ROUTES.HOME}
                className={`flex items-center gap-2 font-[600] text-[12.8px] ${
                  pathname !== APP_ROUTES.HOME && "text-linkGray"
                }`}
              >
                <LazyLoadImage
                  src={ASSETS.union}
                  wrapperClassName="min-w-[24px] w-[24px] h-[24px]"
                  className="w-full h-full object-contain"
                  effect="opacity"
                  alt=""
                />
                {t("home")}
              </Link>
            </SwiperSlide>
            {list
              ?.map((item, idx) => (
                <SwiperSlide key={idx} className="flex-[1]">
                  <Link
                    to={APP_ROUTES.CATEGORY + `/${item.id}`}
                    className={`anim-text ${
                      activeCategory === String(item?.id) && "active"
                    } whitespace-nowrap text-[12.8px] text-linkGray hover:text-black`}
                  >
                    <span>{item?.title}</span>
                  </Link>
                </SwiperSlide>
              ))
              ?.reverse()}
          </>
        )}
        {/* <div className="flex items-center gap-[30px] mb-6"> */}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default Categories;
