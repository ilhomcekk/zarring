import { BreadCrumb, Card, NoResults, Title } from "../../components";
import { productsStore } from "../../store";

const Favorites = () => {
  const { favorites } = productsStore();
  return (
    <div className="wrapper">
      <BreadCrumb
        items={[
          {
            name: "Избранные",
          },
        ]}
      />
      <Title title={"Избранные"} />
      {favorites?.length < 1 && <NoResults />}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-5">
        {favorites?.map((item, idx) => (
          <Card card={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
