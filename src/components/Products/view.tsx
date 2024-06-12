import { Card, Title } from "..";

interface Props {
  title?: string;
  className?: string;
}

const Products = ({ title, className }: Props) => {
  return (
    <div className={`${className}`}>
      <Title title={title} className={`${className} font-[500]`} />
      <div className="grid grid-cols-4 gap-x-[16px] gap-y-5">
        {[...Array(8)].map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
