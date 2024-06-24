import { APP_ROUTES } from ".";
import {
  Basket,
  Detail,
  Favorites,
  Home,
  NotFound,
  ProductsByCategory,
  Search,
  Politics,
  About
} from "../views";

export const _routes = [
  {
    path: APP_ROUTES.HOME,
    element: Home,
    exact: true,
  },
  {
    path: APP_ROUTES.PRODUCT_DETAIL,
    element: Detail,
  },
  {
    path: APP_ROUTES.BASKET,
    element: Basket,
  },
  {
    path: APP_ROUTES.FAVORITES,
    element: Favorites,
  },
  {
    path: APP_ROUTES.SEARCH + "/:slug",
    element: Search,
  },
  {
    path: APP_ROUTES.CATEGORY + "/:id",
    element: ProductsByCategory,
  },
  {
    path: APP_ROUTES.POLITICS,
    element: Politics,
  },
  {
    path: APP_ROUTES.ABOUT,
    element: About,
  },
  {
    path: "*",
    element: NotFound,
  },
];
