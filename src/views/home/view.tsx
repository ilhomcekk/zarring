import { useTranslation } from "react-i18next";
import { Banner, Brands, Products, Title } from "../../components";
import { useEffect, useState } from "react";
import { categoryStore } from "../../store";

const Home = () => {
  const { t } = useTranslation();
  const { list, listLoading } = categoryStore();
  const [ids, setIds] = useState<number[] | string[]>([]);
  useEffect(() => {
    if (!listLoading) {
      setIds(() => list.map((item) => String(item.id)));
    }
  }, [listLoading]);
  const reversedArray = ids?.slice(0, 5)?.reverse();
  console.log(reversedArray);

  return (
    <div className="wrapper">
      <Banner />
      {reversedArray?.slice(0, 5)?.map((num) => (
        <Products categoryId={String(num)} className="md:mt-[50px] mt-[25px]" />
      ))}
      <Brands className="md:mt-[50px] mt-[35px] max-md:mb-4" />
      <Title
        title={t("whatCanOffer")}
        className="text-center md:mt-[50px] mt-[25px] max-md:mb-4"
      />
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        {t("aboutUs1")}
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        {t("aboutUs2")}
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        {t("aboutUs3")}
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        {t("aboutUs4")}
      </div>
    </div>
  );
};

export default Home;
