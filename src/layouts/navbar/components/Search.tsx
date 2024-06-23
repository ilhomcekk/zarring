import { Link } from "react-router-dom";
import { ASSETS } from "../../../assets/images";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="mobile-search flex border border-border rounded-[4px] h-[40px]">
      <input
        type="search"
        className="xl:w-[550px] lg:w-[300px] placeholder:text-[#757575] text-[14px] px-4 rounded-[4px]"
        placeholder="Искать товары и категории"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link
        to={`/search/${query}`}
        className="flex items-center justify-center min-w-[75px] w-[75px] rounded-r-[4px] bg-[#F2F4F7] hover:bg-[#e3e5e7] cursor-pointer"
      >
        <img src={ASSETS.search} className="min-w-[16px] w-[16px]" alt="" />
      </Link>
    </div>
  );
};

export default Search;
