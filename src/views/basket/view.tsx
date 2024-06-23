import { BasketCard, BreadCrumb, Title } from "../../components";
import { modalsStore, productsStore } from "../../store";
import OrderModal from "./components/OrderModal";

const Basket = () => {
  const { basketCards } = productsStore();
  const { openModal } = modalsStore();
  let totalPrice = 0;
  basketCards?.forEach((item) => (totalPrice += item?.price));
  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            {
              name: "Корзина",
            },
          ]}
        />
        <div className="flex items-center">
          <Title title="Ваша корзина," className="mb-0 font-[500]" />
          <div className="md:text-[30px] text-[20px] text-txtGray">
             {basketCards?.length} товар
          </div>
        </div>
        <div className="flex max-xl:flex-col gap-6 mt-6">
          <div className="flex flex-col md:gap-4 gap-6 xl:min-w-[65%] xl:w-[65%]">
            {basketCards?.map((item, idx) => (
              <BasketCard card={item} key={idx} />
            ))}
          </div>
          <div className="w-full h-max sticky top-[80px] border border-[#A9A9A9] rounded-[8px] p-6">
            <div className="md:text-[22px] text-[17px]">Ваш заказ</div>
            <div className="md:mt-8 mt-4 flex items-center justify-between">
              <div className="md:text-[22px] text-[17px]">
                Товары ({basketCards?.length}):
              </div>
              <div className="md:text-[22px] text-[17px]">
                {totalPrice?.toLocaleString("ru-RU")}$
              </div>
            </div>
            <div className="md:mt-6 mt-4 md:pt-6 pt-4 border-t flex items-center justify-between">
              <div className="md:text-[22px] text-[17px]">Итого:</div>
              <div className="md:text-[22px] text-[17px]">
                {totalPrice?.toLocaleString("ru-RU")}$
              </div>
            </div>
            <div
              className="button md:mt-12 mt-6"
              onClick={() => openModal("order")}
            >
              Перейти к оформлению
            </div>
          </div>
        </div>
      </div>
      <OrderModal />
    </>
  );
};

export default Basket;
