import { Link } from "react-router-dom";

const SubMenuItem = () => {
  return (
    <div className="mt-[20px]">
      {[...Array(5)].map((_, idx) => (
        <Link
          to=""
          className="block font-500 text-[#27282a] text-[0.8rem] hover:text-[#E63737] mb-[9px]"
          key={idx}
        >
          Браслеты
          <span className="!font-500 !text-[#9fa4b5] !ml-1">10</span>
        </Link>
      ))}
    </div>
  );
};

export default SubMenuItem;
