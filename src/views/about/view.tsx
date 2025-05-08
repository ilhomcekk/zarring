import { useTranslation } from "react-i18next";
import { BreadCrumb, Title } from "../../components";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <BreadCrumb
        items={[
          {
            name: t("aboutUs"),
          },
        ]}
      />
      <Title
        title={t("whatCanOffer")}
        className="text-center md:mt-[50px] mt-[25px] max-md:mb-4"
      />
      <div className="leading-[150%] text-center mt-32">{t("aboutUs1")}</div>
      <div className="leading-[150%] text-center my-6">{t("aboutUs2")}</div>
      <div className="leading-[150%] text-center my-6">{t("aboutUs3")}</div>
      <div className="leading-[150%] text-center my-6">{t("aboutUs4")}</div>
    </div>
  );
};

export default About;
