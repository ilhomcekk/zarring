import { LazyLoadImage } from "react-lazy-load-image-component";

const BrandCard = () => {
  return (
    <div className="h-[110px] flex items-center justify-center border border-[#E2E2E2] p-3">
      <LazyLoadImage
        src={
          "https://s3-alpha-sig.figma.com/img/78af/45c2/e54e47aacd6bc95593470a3be04b8a57?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSzoUA2ZIVQW7OtQRBmRW~kgdGwHLZqwF5qCec~-x~maaAlenj6ZIrNUTKHY4Vkn1LCB08JLYcZWsrmXbSxz3~xSoC81IajCcpdiRAtuE4JhMDTBQpmtHRJB8kV3UIOoOBUVufKaX5fYb0fMfWpVMY3FNy0kOJ2uyGC9GA6Y5x4mT7LDh2nxj3ortsc5wd3xVJ7ojOUqb6A0q28MdtXPTKXf3McFP167WCsnMwpiFExIuxpYJZJafLJxEDW-Z-aO9ZJhFRZJkLQLSzk3Fxsqs2olD44zw2Q~8pUk9nrWBA~lUNBX-4HlLwG17cZRWkwfCeAYF7gJaC~HOuLVQQSS3g__"
        }
        wrapperClassName="w-full h-full"
        className="w-full h-full object-contain"
        effect="opacity"
        alt=""
      />
    </div>
  );
};

export default BrandCard;
