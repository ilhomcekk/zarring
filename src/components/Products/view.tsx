import { useEffect } from "react";
import { Card, ProductSkeleton, Title } from "..";
import { categoryStore, productsStore } from "../../store";
import { findCategoryById } from "../../utils";
import { CategoryType } from "../../types";

interface Props {
  className?: string;
  categoryId: string;
}

const Products = ({ className, categoryId }: Props) => {
  const {
    getProductsByCategory,
    productsByCategoryLoading,
    productsByCategory,
  } = productsStore();
  const { list } = categoryStore();

  const category: CategoryType = findCategoryById(list, Number(categoryId));
  useEffect(() => {
    getProductsByCategory(categoryId, { page: 1, pageSize: 20 });
  }, []);
  return (
    <div className={`${className}`}>
      <Title
        title={category?.title || ""}
        className={`${className} font-[500]`}
      />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
        {productsByCategoryLoading
          ? [...Array(5)].map((_, idx) => <ProductSkeleton key={idx} />)
          : productsByCategory?.data?.map((item, idx) => (
              <Card card={item} key={idx} />
            ))}
      </div>
    </div>
  );
};

export default Products;
