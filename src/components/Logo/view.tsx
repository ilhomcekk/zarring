import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router";

const Logo = () => {
  return <Link to={APP_ROUTES.HOME}></Link>;
};

export default Logo;
