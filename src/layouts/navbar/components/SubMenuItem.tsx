import { Link } from "react-router-dom";
import { CategoryType } from "../../../types";
import { APP_ROUTES } from "../../../router";

interface Props {
  items?: CategoryType;
}

const SubMenuItem = ({ items }: Props) => {
  return items?.id ? (
    <div className="mt-[20px]">
      {items?.subcategories?.map((item, idx) => (
        <Link
          to={APP_ROUTES.CATEGORY + `/${item?.id}`}
          className="block font-500 text-[#27282a] text-[0.8rem] hover:text-[#E63737] mb-[9px]"
          key={idx}
        >
          {item?.title}
          {/* <span className="!font-500 !text-[#9fa4b5] !ml-1">10</span> */}
        </Link>
      ))}
    </div>
  ) : null;
};

export default SubMenuItem;
