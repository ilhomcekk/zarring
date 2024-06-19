import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../../assets/images";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../router";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = () => {
  return (
    <div className="wrapper">
      <Swiper
        className="mb-6"
        speed={1500}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        {/* <div className="flex items-center gap-[30px] mb-6"> */}
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
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
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Браслеты</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Тросы</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Кольцо</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Алмазы</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Камень</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Проба</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Браслеты</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Тросы</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Кольцо</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Алмазы</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Камень</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={APP_ROUTES.CATEGORY + `/${1}`}
            className="anim-text text-[12.8px] text-linkGray hover:text-black"
          >
            <span>Проба</span>
          </Link>
        </SwiperSlide>
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default Categories;
