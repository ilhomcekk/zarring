import { Skeleton, Space } from "antd";

const ProductSkeleton = () => {
  return (
    <Space
      className="w-full items-start flex-col"
      classNames={{ item: "w-full" }}
    >
      <Skeleton.Image active className="md:!h-[280px] !h-[130px] !w-full" />
      <Skeleton active />
    </Space>
  );
};

export default ProductSkeleton;
