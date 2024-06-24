import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import "./breadCrumb.scss";
import { useTranslation } from "react-i18next";

interface Props {
  items?: {
    name: string;
    link?: string;
  }[];
}

const BreadCrumb = ({ items }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-[4px] mb-6">
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
