import { Tabs, TabsProps } from "antd";
import { productsStore } from "../../../store";

const TabsDetail = () => {
  const { detail } = productsStore();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Описание товара",
      children: <div>{detail?.discription}</div>,
    },
  ];

  return (
    <Tabs
      size="large"
      className="detail-tab"
      defaultActiveKey="1"
      items={items}
    />
  );
};

export default TabsDetail;
