import { Link, useNavigate } from "react-router-dom";
import "./title.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  title?: string;
  link?: string;
}

const Title = ({ className, title, link }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      className={`title ${className} ${
        link &&
        "flex items-center justify-between cursor-pointer hover:text-green"
      }`}
      onClick={() => {
        if (link) {
          navigate(link);
        }
      }}
    >
      {title}
      {link ? (
        <Link to={link} className="flex items-center gap-2 hover:underline">
          {t("showAll")}{" "}
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
      ) : null}
    </div>
  );
};

export default Title;
