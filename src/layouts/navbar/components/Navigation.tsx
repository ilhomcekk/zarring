import { Link, useLocation } from "react-router-dom";
import {
  BasketIcon,
  CategoryIcon,
  FavoriteIcon,
  HomeIcon,
} from "../../../utils/icons";
import { APP_ROUTES } from "../../../router";

const Navigation = () => {
  const { pathname } = useLocation();
  const list = [
    {
      name: "Главная",
      Icon: HomeIcon,
      path: APP_ROUTES.HOME,
    },
    {
      name: "Категория",
      Icon: CategoryIcon,
      path: APP_ROUTES.NOT_FOUND,
    },
    {
      name: "Корзина",
      Icon: BasketIcon,
      path: APP_ROUTES.BASKET,
    },
    {
      name: "Избранное",
      Icon: FavoriteIcon,
      path: APP_ROUTES.FAVORITES,
    },
  ];
  return (
    <div className="navigation">
      {list.map((Item, idx) => (
        <Link
          key={idx}
          to={Item.path}
          className={`${Item.path === pathname && "stroke-white"}`}
        >
          <Item.Icon strokeWidth={Item.path === pathname ? "1.1" : 1} />
          {Item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
