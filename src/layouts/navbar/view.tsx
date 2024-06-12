import { ASSETS } from "../../assets/images";
import { LanguageSwitcher, Logo } from "../../components";
import { Search } from "./components";
import Categories from "./components/Categories";

const Navbar = () => {
  return (
    <>
      <div className="bg-green py-[6px]">
        <div className="wrapper">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[14px] text-white">
              <img src={ASSETS.location} className="mr-3" alt="" />
              Город:
              <span className="ml-1 underline underline-offset-1 font-[500] text-white text-[14px]">
                Ташкент
              </span>
            </div>
            <LanguageSwitcher className="[&>div]:text-white [&>div]:font-[500]" />
          </div>
        </div>
      </div>
      <div className="py-5 sticky top-0 bg-white z-[99]">
        <div className="wrapper">
          <div className="flex items-center">
            <Logo className="mr-8" />
            <Search />
            <div className="ml-auto flex items-center">
              <div className="flex items-center gap-3 hover:bg-light h-[40px] px-4 text-[14px] font-[500] rounded-[4px] text-gray cursor-pointer">
                <img src={ASSETS.user} alt="" />
                Войти
              </div>
              <div className="flex items-center gap-3 hover:bg-light h-[40px] px-4 text-[14px] font-[500] rounded-[4px] text-gray cursor-pointer">
                <img src={ASSETS.heart} alt="" />
                Избранное
              </div>
              <div className="flex items-center gap-3 hover:bg-light h-[40px] px-4 text-[14px] font-[500] rounded-[4px] text-gray cursor-pointer">
                <img src={ASSETS.basket} alt="" />
                Корзина
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Navbar;
