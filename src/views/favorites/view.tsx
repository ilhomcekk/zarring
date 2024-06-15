import { BreadCrumb, Products } from "../../components";

const Favorites = () => {
  return (
    <div className="wrapper">
      <BreadCrumb
        items={[
          {
            name: "Избранные",
          },
        ]}
      />
      <Products title="Избранные" />
    </div>
  );
};

export default Favorites;
