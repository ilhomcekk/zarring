import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
// import { GiTeleport } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { categoryStore, modalsStore } from "../../../store";
import { Accordion } from "../../../components";
import MobileItem from "./MobileItem";
import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t } = useTranslation();
  const { modals, closeModal } = modalsStore();
  const { list } = categoryStore();

  return (
    <div className={`mobile-menu ${modals?.menu && "show"}`}>
      <div className="flex items-center justify-end px-4 py-3 bg-white">
        <button className="ml-auto" onClick={() => closeModal("menu")}>
          <IoCloseOutline size={28} />
        </button>
      </div>
      <div className="px-4 my-[7px] bg-white">
        <Accordion
          title={t("catalog")}
          content={list?.map((item, idx) => (
            <MenuItem
              item={item}
              onMouseEnter={() => {}}
              key={idx}
              className="px-0 py-2 border-t border-[#76797f33]"
            />
          ))}
        />
      </div>
      <div className="px-4 bg-white">
        <MobileItem Icon={AiOutlineHeart} title={t("favorites")} />
        <MobileItem Icon={BiMap} title={`${t("city")}: Ташкент`} />
        {/* <MobileItem Icon={GiTeleport} title="Портфолио" /> */}
        {/* <MobileItem Icon={IoLogoStackoverflow} title="Нанесение логотипа" /> */}
        <MobileItem Icon={GrContactInfo} title={t("contacts")} />
        <hr className="block border-t border-[#76797f33]" />
        <a
          className="flex items-center gap-2 py-2 text-[12.25px] text-[#141414] font-600"
          href=""
        >
          <BsTelephone size={20} />
          +998 90 123 45 67
        </a>
        <a
          className="flex items-center gap-2 py-2 text-[12.25px] text-[#141414] font-600"
          href={``}
        >
          <BsTelephone size={20} />
          +998 90 123 45 68
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
