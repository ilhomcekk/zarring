import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../assets/images";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  text?: string;
}

const NoResults: FC<Props> = ({ className, text }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex items-center justify-center flex-col ${className}`}>
      <LazyLoadImage
        className="max-w-[200px]"
        effect="opacity"
        src={ASSETS.noResultsImage}
        alt=""
      />
      <div className="font-600 text-[#141415] text-center text-[22px]">
        {text ? text : t("noResults")}
      </div>
    </div>
  );
};

export default NoResults;
