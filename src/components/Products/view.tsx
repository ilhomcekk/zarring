import { useEffect, useState } from "react";
import { Card, ProductSkeleton, Title } from "..";
import { categoryStore } from "../../store";
import { findCategoryById } from "../../utils";
import { CategoryType } from "../../types";
import { requests } from "../../helpers/requests";
import { Button } from "antd";
import { Link } from "react-router-dom";

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
  // const fetchdata2 = async (id: string, params: any) => {
  //   setLoading2(true);
  //   try {
  //     const { data } = await requests.fetchProductsByCategory(id, params);
  //     const products = [...products2, ...data?.data];
  //     setProducts2(products);
  //   } catch (err) {
  //   } finally {
  //     setLoading2(false);
  //   }
  // };

  return (
    <div className={`${className}`}>
      <Title
        title={category?.title || ""}
        className={`${className} font-[500]`}
        link={products?.length > 10 ? `/category/${category?.id}` : ""}
      />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
        {loading
          ? [...Array(5)].map((_, idx) => <ProductSkeleton key={idx} />)
          : products
              ?.slice(0, 10)
              ?.map((item, idx) => <Card card={item} key={idx} />)}
      </div>
      {/* <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
        {loading2
          ? [...Array(5)].map((_, idx) => <ProductSkeleton key={idx} />)
          : products2?.map((item, idx) => <Card card={item} key={idx} />)}
      </div> */}
      {products?.length > 10 && (
        <Link to={`/category/${category?.id}`}>
          <Button
            type="primary"
            className="h-[48px] mx-auto w-full bg-bgPrimary shadow-none text-primary mt-12"
            size="large"
            onClick={() => {
              // setCounter((prev) => prev + 1);
              // fetchdata2(categoryId, { page: counter + 1, pageSize: 20 });
            }}
          >
            Показать ещё
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Products;
