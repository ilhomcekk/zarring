import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../../../config";
import { Image } from "antd";

interface Props {
  card: { name: string | null; img: string | null };
}

const BrandCard = ({ card }: Props) => {
  return (
    <div className="h-[110px] flex items-center justify-center border border-[#E2E2E2] hover:border-red duration-200 p-3">
      <Image
        src={BASE_URL + card?.img}
        className="w-full h-full object-contain"
      >
        <LazyLoadImage
          src={BASE_URL + card?.img}
          wrapperClassName="w-full h-full cursor-pointer"
          className="w-full h-full object-contain"
          effect="opacity"
          alt=""
        />
      </Image>
    </div>
  );
};

export default BrandCard;
