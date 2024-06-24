import { useParams } from "react-router-dom";
import {
  BreadCrumb,
  Card,
  NoResults,
  PageLoading,
  Title,
} from "../../components";
import { useEffect } from "react";
import { productsStore } from "../../store";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
  const { getProductSearch, productSearch, productSearchLoading } =
    productsStore();
  const { slug } = useParams();
  useEffect(() => {
    getProductSearch({ text: slug });
  }, [slug]);

  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            {
              name: t("searchProduct"),
            },
          ]}
        />
        <Title title={`${t("searchByRequest")} ( ${slug} )`} />
        {!productSearchLoading && productSearch?.length < 1 && <NoResults />}
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
          {productSearch?.map((item, idx) => (
            <Card card={item} key={idx} />
          ))}
        </div>
      </div>
      <PageLoading loading={productSearchLoading} />
    </>
  );
};

export default Search;
