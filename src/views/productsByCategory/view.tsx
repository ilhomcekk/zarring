import { BreadCrumb } from "../../components";
import { CategoryItem } from "./components";

const ProductsByCategory = () => {
  return (
    <div className="wrapper">
      <BreadCrumb
        items={[
          {
            name: "Браслеты",
          },
        ]}
      />
      <div className="flex">
        <div className="flex-[260px]">
          <div className="text-[18px] mb-2">Категории</div>
          <div className="flex flex-col gap-[2px]">
            {[...Array(10)].map((_, idx) => (
              <CategoryItem withArrow key={idx} />
            ))}
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
