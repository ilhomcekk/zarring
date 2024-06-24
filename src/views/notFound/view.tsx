import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Result
      status="500"
      title={"Siz kirgan sahifa topilmadi"}
      subTitle={"Siz kirgan sahifa topilmadi"}
      extra={
        <Button type="primary" className="bg-red">
          {t("home")}
        </Button>
      }
    />
  );
};

export default NotFound;
