import { Tabs, TabsProps } from "antd";

const TabsDetail = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Описание товара",
      children: (
        <div>
          Серебряное кольцо с алмазом — это изысканное и элегантное украшение,
          которое привлекает взгляд своим блеском и изысканностью. Основой
          кольца служит благородное серебро, которое создает основу для камня.
          Центральным элементом украшения является алмаз, который воплощает в
          себе красоту, сияние и роскошь.
        </div>
      ),
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
