import { ASSETS } from "../../../assets/images";

const Search = () => {
  return (
    <div className="flex border border-border rounded-[4px] h-[40px]">
      <input
        type="search"
        className="w-[630px] placeholder:text-[#757575] text-[14px] px-4 rounded-[4px]"
        placeholder="Искать товары и категории"
      />
      <div className="flex items-center justify-center min-w-[75px] w-[75px] rounded-r-[4px] bg-[#F2F4F7] hover:bg-[#e3e5e7] cursor-pointer">
        <img src={ASSETS.search} className="min-w-[16px] w-[16px]" alt="" />
      </div>
    </div>
  );
};

export default Search;
