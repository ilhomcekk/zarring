import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./banner.scss";
import { Shimmer } from "react-shimmer";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      className="swiper-arrow rounded-[12px]"
      loop
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
      <SwiperSlide className="cursor-pointer">
        <Link
          to=""
          rel="noopener noreferrer"
          target="_blank"
          className="block md:h-[420px] h-[185px]"
        >
          <LazyLoadImage
            effect="blur"
            src={
              "https://s3-alpha-sig.figma.com/img/b09f/b5f4/a38001cb51cfd233f36991e12cc278a3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKQh9rooQRk2szD8HxDJK8kAHT3PvjoS-RDT4O5oICDki-EU~ao1lLCASDe50bzSQXyuzra9MvMln2nY6GnDogHD4tr-MhUmAUkEaTEmOsAWzg0SI698LZVt2eugSp9gT~CR~kL7naDUmsG6gn5-0v~RbLdeK5c8aCiN8Opc-Y6~NI5m0A5~-I3mGTrlBPl9An1m275ZXumYxEJKxyQplidHepwnBGJ63jrBNl7SsD1Xe6qu~kG6c7aEGVPrWy7Qj~BZK3iUuDGkPIWtSZXKTpljZ160ydANKrTRMcHEncZwidnMj2yqwvb-5YPMV2iDvoCEF-uSaUsv5ULJb-LUZg__"
            }
            alt=""
            className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[12px]"
            wrapperClassName="w-full h-full"
          />
        </Link>
      </SwiperSlide>
      {/* {bannersLoading ? (
        <Shimmer className="md:!h-[420px] !h-[185px] !rounded-[12px] !w-full" />
      ) : (
        !bannersLoading &&
        banners?.data?.map((item, idx) => (
          <SwiperSlide className="cursor-pointer" key={idx}>
            <a
              href={item?.link}
              rel="noopener noreferrer"
              target="_blank"
              className="block md:h-[420px] h-[185px]"
            >
              <LazyLoadImage
                effect="blur"
                src={item?.image}
                alt=""
                className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[12px]"
                wrapperClassName="w-full h-full"
              />
            </a>
          </SwiperSlide>
        ))
      )} */}
    </Swiper>
  );
};

export default Banner;
