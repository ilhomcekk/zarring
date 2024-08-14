import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../assets/images";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link to={APP_ROUTES.HOME} className={`${className}`}>
      <LazyLoadImage
        wrapperClassName="min-w-[145px] w-[145px] h-[50px]"
        className="w-full h-full object-cover"
        src={ASSETS.logo}
        effect="opacity"
        alt=""
      />
    </Link>
  );
};

export default Logo;
