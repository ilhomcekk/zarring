import { useParams } from "react-router-dom";
import { BreadCrumb, Card, NoResults, PageLoading } from "../../components";
import { categoryStore, productsStore } from "../../store";
import { CategoryItem } from "./components";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { findCategoryById } from "../../utils";
import { CategoryType } from "../../types";
import { Pagination } from "antd";

const ProductsByCategory = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { list } = categoryStore();
  const {
    getProductsByCategory,
    productsByCategory,
    productsByCategoryLoading,
  } = productsStore();
  const category: CategoryType = findCategoryById(list, id);

  useEffect(() => {
    if (id) {
      getProductsByCategory(id, { page: 1, pageSize: 20 });
    }
  }, [id]);
  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            {
              name: category?.title || "",
            },
          ]}
        />
        <div className="flex max-lg:flex-col">
          <div className="min-w-[260px] w-[260px]">
            <div className="text-[18px] mb-2">{t("categories")}</div>
            <div className="flex flex-col gap-[2px]">
              {list?.map((item, idx) => (
                <>
                  <CategoryItem
                    id={item.id}
                    title={item?.title}
                    withArrow
                    active={item?.id === Number(id)}
                    key={idx}
                  />
                  {item?.subcategories?.map((sub, i) => (
                    <CategoryItem
                      id={sub?.id}
                      title={sub?.title}
                      active={sub?.id === Number(id)}
                      className="pl-2"
                      key={i}
                    />
                  ))}
                </>
              ))}
            </div>
          </div>
          <div className="w-full">
            {!productsByCategoryLoading &&
              productsByCategory?.data?.length < 1 && <NoResults />}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-x-[16px] gap-y-5">
              {productsByCategory?.data?.map((item, idx) => (
                <Card card={item} key={idx} />
              ))}
            </div>
            <Pagination
              current={Number(productsByCategory?.currentPage)}
              total={Number(productsByCategory?.totalItems)}
              pageSize={20}
              showSizeChanger={false}
              onChange={(e) => {
                if (id) {
                  getProductsByCategory(id, { page: e, pageSize: 20 });
                }
              }}
              className="flex items-center justify-center mt-12"
            />
          </div>
        </div>
      </div>
      <PageLoading loading={productsByCategoryLoading} />
    </>
  );
};

export default ProductsByCategory;
