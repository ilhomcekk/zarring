import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/images";
import { LanguageSwitcher, Logo } from "../../components";
import {
  Catalog,
  CatalogIcon,
  MobileMenu,
  Navigation,
  Search,
} from "./components";
import Categories from "./components/Categories";
import { APP_ROUTES } from "../../router";
import { modalsStore } from "../../store";
import { PhoneOutlined } from "@ant-design/icons";
import { LuMenu } from "react-icons/lu";
import "./navbar.scss";

const Navbar = () => {
  const { openModal, modals, closeModal } = modalsStore();
  return (
    <>
      <div className="bg-footer py-[6px]">
        <div className="wrapper">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center text-[14px] text-white">
                <img src={ASSETS.location} className="mr-3" alt="" />
                Город:
                <span className="ml-1 underline underline-offset-1 font-[500] text-white text-[14px]">
                  Ташкент
                </span>
              </div>
              <a
                href="#"
                className="hidden md:flex items-center gap-3 font-[600] text-white"
              >
                <PhoneOutlined />
                +998 90 123 45 67
              </a>
            </div>
            <LanguageSwitcher className="[&>div]:text-white [&>div]:font-[500]" />
          </div>
        </div>
      </div>
      <div className="md:py-5 py-2 sticky top-0 bg-white z-[99]">
        <div className="wrapper">
          <div className="flex items-center">
            <LuMenu
              onClick={() => openModal("menu")}
              className="hidden max-lg:block min-w-[20px] w-[20px] h-[20px] mr-4"
            />
            <Logo className="mr-8" />
            <button
              onClick={() => {
                if (modals?.catalog) {
                  closeModal("catalog");
                } else {
                  openModal("catalog");
                }
              }}
              className="hidden lg:flex items-center gap-[6px] rounded-[4px] font-500 text-primary px-4 bg-bgPrimary hover:bg-bgPrimaryHover h-[40px] text-sm mr-4"
            >
              <CatalogIcon open={modals?.catalog} /> Каталог
            </button>
            <Search />
            <div className="ml-auto flex items-center">
              {/* <div className="flex items-center gap-3 hover:bg-light h-[40px] px-4 text-[14px] font-[500] rounded-[4px] text-gray cursor-pointer">
                <img src={ASSETS.user} alt="" />
                Войти
              </div> */}
              <Link
                to={APP_ROUTES.FAVORITES}
                className="flex items-center gap-3 hover:bg-light h-[40px] px-4 text-[14px] font-[500] rounded-[4px] text-gray cursor-pointer"
              >
                <img src={ASSETS.heart} alt="" />
                <span className="max-md:hidden">Избранное</span>
              </Link>
              <Link
                to={APP_ROUTES.BASKET}
                className="flex items-center gap-3 hover:bg-light h-[40px] md:px-4 pl-4 text-[14px] font-[500] rounded-[4px] text-gray cursor-pointer"
              >
                <img src={ASSETS.basket} alt="" />
                <span className="max-md:hidden">Корзина</span>
                <span className="text-[14px] py-[2px] px-[4px] bg-footer text-white rounded-[4px]">
                  99
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Catalog />
      </div>
      <MobileMenu />
      <Navigation />
      <Categories />
    </>
  );
};

export default Navbar;
