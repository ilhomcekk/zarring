import { Swiper, SwiperSlide } from "swiper/react";
import { BrandCard, Title } from "..";
import { Pagination } from "swiper/modules";

interface Props {
  className?: string;
}

const Brands = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <Title title="Бренды" className="text-center mb-4" />
      <div className="bg-red h-[1px] w-[50px] mx-auto"></div>
      <Swiper
        spaceBetween={15}
        slidesPerView={10}
        pagination={true}
        className="[&>.swiper-wrapper]:pb-[50px] pt-[30px]"
        modules={[Pagination]}
        loop
      >
        {[...Array(12)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <BrandCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
