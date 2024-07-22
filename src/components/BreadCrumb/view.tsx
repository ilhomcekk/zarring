import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import "./breadCrumb.scss";
import { useTranslation } from "react-i18next";
import { ASSETS } from "../../assets/images";

interface Props {
  items?: {
    name: string;
    link?: string;
  }[];
}

const BreadCrumb = ({ items }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-[4px] mb-6">
      <div
        onClick={() => navigate(-1)}
        className="breadcrumb flex items-center gap-1 md:hidden"
      >
        <img src={ASSETS.arrowBlack} className="rotate-[180deg]" alt="" />
        {t("back")} /
      </div>
      <Link to={APP_ROUTES.HOME} className="breadcrumb">
        {t("home")}
      </Link>
      {items?.map((item, idx) =>
        item?.link ? (
          <Link
            key={idx}
            to={item.link}
            className="breadcrumb link cursor-pointer hover:!text-black"
          >
            / {item?.name}
          </Link>
        ) : (
          <div key={idx} className="breadcrumb link">
            / {item?.name}
          </div>
        )
      )}
    </div>
  );
};

export default BreadCrumb;
