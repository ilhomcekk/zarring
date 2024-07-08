import { useEffect } from "react";
import { categoryStore } from "../../store";
import { Skeleton } from "antd";
import { CategoryItem } from "../productsByCategory/components";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";

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
            <div className="flex flex-col gap-2">
              <Title className="mb-2" title={t("catalog")} />
              {list
                ?.map((item, idx) => (
                  <CategoryItem
                    className="!w-full"
                    withArrow
                    title={item?.title}
                    active={true}
                    id={item?.id}
                    key={idx}
                  />
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
