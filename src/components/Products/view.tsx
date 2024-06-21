import { Card, ProductSkeleton, Title } from "..";

interface Props {
  title?: string;
  className?: string;
}

const Products = ({ title, className }: Props) => {
  return (
    <div className={`${className}`}>
      <Title title={title} className={`${className} font-[500]`} />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
        {[...Array(5)].map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
        {[...Array(8)].map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
