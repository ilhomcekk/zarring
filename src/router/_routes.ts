import { APP_ROUTES } from ".";
import {
  Basket,
  Detail,
  Home,
  NotFound
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
    path: "*",
    element: NotFound,
  },
];