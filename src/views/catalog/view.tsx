import { useEffect } from "react";
import { categoryStore } from "../../store";
import { Skeleton } from "antd";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";
import Item from "./components/item";

const Catalog = () => {
  const { t } = useTranslation();
  const { list, listLoading, getList } = categoryStore();
  useEffect(() => {
    if (!list?.length) {
      getList({});
    }
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="mx-auto">
          {listLoading ? (
            [...Array(6)].map((_, idx) => (
              <Skeleton
                key={idx}
                paragraph={{ rows: 0 }}
                className="w-full [&>div>h3]:!w-full [&>div]:!flex [&>div]:!items-center"
              />
            ))
          ) : (
            <div className="flex flex-col">
              <Title className="mb-4" title={t("catalog")} />
              {list
                ?.map((item, idx) => (
                  <Item className="!w-full" item={item} key={idx} />
                ))
                ?.reverse()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Catalog;
