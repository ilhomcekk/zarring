import { Link, useLocation } from "react-router-dom";
import { categoryStore, modalsStore } from "../../../store";
import SubMenuItem from "./SubMenuItem";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import { APP_ROUTES } from "../../../router";
import { CategoryType } from "../../../types";

const Catalog = () => {
  const { pathname } = useLocation();
  const { list } = categoryStore();
  const { modals, closeModal } = modalsStore();
  const [category, setCategory] = useState<CategoryType>();

  useEffect(() => {
    closeModal("catalog");
  }, [pathname]);

  return (
    <>
      <div className={`catalog-menu ${modals?.catalog && "show"}`}>
        <div className="wrapper">
          <div className="menu-wrapper">
            <div className="categories-block pb-6 border-r border-[#76797f33]">
              {list?.map((item, idx) => (
                <MenuItem
                  onMouseEnter={() => setCategory(item)}
                  item={item}
                  key={idx}
                />
              ))}
            </div>
            <div className="sub-categories-block pl-6">
              <Link
                to={APP_ROUTES.CATEGORY + `/${category?.id}`}
                className="flex items-center gap-2 text-lg py-[11px] text-[#141415] font-600 hover:text-[#e63737]"
              >
                {category?.title}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-[14px] stroke-[20]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
                </svg>
              </Link>
              <div className="flex flex-wrap gap-x-8 pb-6">
                <SubMenuItem items={category} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="menu-shadow"
          onClick={() => closeModal("catalog")}
        ></div>
      </div>
      <div
        onClick={() => closeModal("catalog")}
        className={`${
          modals?.catalog ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full`}
      ></div>
    </>
  );
};

export default Catalog;
