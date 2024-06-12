import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../../assets/images";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const Categories = () => {
  return (
    <div className="wrapper">
      <div className="flex items-center gap-[30px] mb-7">
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
          Скидки
        </Link>
        <Link
          to={APP_ROUTES.HOME}
          className="text-[12.8px] font-[600] cursor-pointer"
        >
          Модель
        </Link>
        <Link
          to={APP_ROUTES.HOME}
          className="text-[12.8px] font-[600] cursor-pointer"
        >
          Камень
        </Link>
        <Link
          to={APP_ROUTES.HOME}
          className="text-[12.8px] font-[600] cursor-pointer"
        >
          Алмаз
        </Link>
        <Link
          to={APP_ROUTES.HOME}
          className="anim-text text-[12.8px] text-linkGray hover:text-black"
        >
          Техника
        </Link>
      </div>
    </div>
  );
};

export default Categories;
