import { useEffect, useState } from "react";
import { Card, ProductSkeleton, Title } from "..";
import { categoryStore } from "../../store";
import { findCategoryById } from "../../utils";
import { CategoryType } from "../../types";
import { requests } from "../../helpers/requests";

interface Props {
  className?: string;
  categoryId: string;
}

const Products = ({ className, categoryId }: Props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { list } = categoryStore();

  const category: CategoryType = findCategoryById(list, Number(categoryId));
  useEffect(() => {
    const fetchdata = async (id: string, params: any) => {
      setLoading(true);
      try {
        const { data } = await requests.fetchProductsByCategory(id, params);
        setProducts(data?.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchdata(categoryId, { page: 1, pageSize: 20 });
    // getProductsByCategory(categoryId, { page: 1, pageSize: 20 });
  }, []);
  return (
    <div className={`${className}`}>
      <Title
        title={category?.title || ""}
        className={`${className} font-[500]`}
        link={`/category/${category?.id}`}
      />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
        {loading
          ? [...Array(5)].map((_, idx) => <ProductSkeleton key={idx} />)
          : products
              ?.slice(0, 10)
              ?.map((item, idx) => <Card card={item} key={idx} />)}
      </div>
    </div>
  );
};

export default Products;
