import { BasketCard, BreadCrumb, Title } from "../../components";

const Basket = () => {
  return (
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
        <div className="text-[30px] text-txtGray"> 1 товар</div>
      </div>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col gap-4 min-w-[65%] w-[65%]">
          {[...Array(2)].map((_, idx) => (
            <BasketCard key={idx} />
          ))}
        </div>
        <div className="w-full h-max sticky top-[80px] border border-[#A9A9A9] rounded-[8px] p-6">
          <div className="text-[22px]">Ваш заказ</div>
          <div className="mt-8 flex items-center justify-between">
            <div className="text-[22px]">Товары (1):</div>
            <div className="text-[22px]">200$</div>
          </div>
          <div className="mt-6 pt-6 border-t flex items-center justify-between">
            <div className="text-[22px]">Итого:</div>
            <div className="text-[22px]">200$</div>
          </div>
          <div className="button mt-12">Перейти к оформлению</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
