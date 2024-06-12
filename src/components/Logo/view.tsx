import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  className?: string
}

const Logo = ({className}: Props) => {
  return (
    <Link to={APP_ROUTES.HOME} className={`${className}`}>
      <LazyLoadImage
        wrapperClassName="min-w-[145px] w-[145px] h-[40px]"
        className="w-full h-full object-contain"
        src={"https://bmix.uz/static/media/logo.77e96ae645fd871fa188.webp"}
        effect="opacity"
        alt=""
      />
    </Link>
  );
};

export default Logo;
