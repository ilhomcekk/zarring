import { useTranslation } from "react-i18next";
import { BasketCard, BreadCrumb, NoResults, Title } from "../../components";
import { modalsStore, productsStore } from "../../store";
import OrderModal from "./components/OrderModal";
import OrderSuccessModal from "./components/OrderSuccessModal";
import { useEffect } from "react";

const Basket = () => {
  const { t } = useTranslation();
  const { basketCards, getProductsByIds } = productsStore();
  const { openModal } = modalsStore();
  let totalPrice = 0;
  basketCards?.forEach(
    (item) => (totalPrice += item?.price * (item?.count ? item?.count : 1))
  );
  let products = basketCards?.map((item) => ({
    count: item?.count,
    id: item?.id,
  }));

  useEffect(() => {
    if (products?.length > 0) getProductsByIds({ productIds: products });
  }, []);
  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            {
              name: t("basket"),
            },
          ]}
        />
        <div className="flex items-center">
          <Title
            title={`${t("your")} ${t("basket")},`}
            className="mb-0 font-[500]"
          />
          <div className="md:text-[30px] text-[20px] text-txtGray">
             {basketCards?.length} {t("product")}
          </div>
        </div>
        <div className="flex max-xl:flex-col gap-6 mt-6">
          <div className="flex flex-col md:gap-4 gap-6 xl:min-w-[65%] xl:w-[65%]">
            {basketCards?.length < 1 && (
              <NoResults className="mt-12" text="Ваша корзина пусто" />
            )}
            {basketCards?.map((item, idx) => (
              <BasketCard card={item} key={idx} />
            ))}
          </div>
          <div className="w-full h-max sticky top-[80px] border border-[#A9A9A9] rounded-[8px] p-6">
            <div className="md:text-[22px] text-[17px]">
              {t("your")} {t("order")}
            </div>
            <div className="md:mt-8 mt-4 flex items-center justify-between">
              <div className="md:text-[22px] text-[17px]">
                {t("products")} ({basketCards?.length}):
              </div>
              <div className="md:text-[22px] text-[17px]">
                {/* {totalPrice?.toLocaleString("ru-RU")} */}
              </div>
            </div>
            <div className="md:mt-6 mt-4 md:pt-6 pt-4 border-t flex items-center justify-between">
              <div className="md:text-[22px] text-[17px]">{t("total")}:</div>
              <div className="md:text-[22px] text-[17px]">
                {/* {totalPrice?.toLocaleString("ru-RU")} */}
                Договорная
              </div>
            </div>
            <div
              className="button md:mt-12 mt-6"
              onClick={() => openModal("order")}
            >
              {t("checkout")}
            </div>
          </div>
        </div>
      </div>
      <OrderModal />
      <OrderSuccessModal />
    </>
  );
};

export default Basket;
