import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Result
      status="500"
      title={t("technicalWorks")}
      subTitle={t("technicalWorks")}
      extra={
        <Button type="primary" className="bg-red">
          {t("home")}
        </Button>
      }
    />
  );
};

export default NotFound;
