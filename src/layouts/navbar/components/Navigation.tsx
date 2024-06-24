import { Link, useLocation } from "react-router-dom";
import {
  BasketIcon,
  CatalogIcon,
  FavoriteIcon,
  HomeIcon,
} from "../../../utils/icons";
import { APP_ROUTES } from "../../../router";
import { productsStore } from "../../../store";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { basketCards } = productsStore();
  const list = [
    {
      id: 1,
      name: t("home"),
      Icon: HomeIcon,
      path: APP_ROUTES.HOME,
    },
    {
      id: 2,
      name: t("catalog"),
      Icon: CatalogIcon,
      path: APP_ROUTES.NOT_FOUND,
    },
    {
      id: 3,
      name: t("basket"),
      Icon: BasketIcon,
      counter: true,
      path: APP_ROUTES.BASKET,
    },
    {
      id: 4,
      name: t("favorites"),
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
          {Item?.counter && (
            <div className="counter">{basketCards?.length}</div>
          )}
          <Item.Icon
            className="w-[24px] h-[24px]"
            // strokeWidth={Item.path === pathname ? "1.1" : 1}
            strokeWidth={
              Item.path === pathname && Item.id === 3
                ? "0.3"
                : Item.path === pathname
                ? "1.1"
                : 1
            }
          />
          {Item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
