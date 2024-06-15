import { BreadCrumb, Products } from "../../components";

const Search = () => {
  return (
    <div className="wrapper">
      <BreadCrumb
        items={[
          {
            name: "Поиск",
          },
        ]}
      />
      <Products title="Поиск по запросу ( Тест )" />
    </div>
  );
};

export default Search;
