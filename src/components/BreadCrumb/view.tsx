import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import "./breadCrumb.scss";

interface Props {
  items?: {
    name: string;
    link?: string;
  }[];
}

const BreadCrumb = ({ items }: Props) => {
  return (
    <div className="flex items-center gap-[4px] mb-6">
      <Link to={APP_ROUTES.HOME} className="breadcrumb">
        Главная
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
