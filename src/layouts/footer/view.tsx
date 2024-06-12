import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/images";
import "./footer.scss";

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover py-[66px]"
      style={{ backgroundImage: `url(${ASSETS.footerBg})` }}
    >
      <div className="wrapper">
        <div className="footer-wrapper p-[5px]">
          <div className="bg-green p-[30px] grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-6 py-6">
              <a
                href=""
                className="flex items-center gap-3 text-[13px] text-white"
              >
                <img
                  className="min-w-[20px] w-[20px]"
                  src={ASSETS.facebook}
                  alt=""
                />
                Facebook
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-[13px] text-white"
              >
                <img
                  className="min-w-[20px] w-[20px]"
                  src={ASSETS.instagram}
                  alt=""
                />
                Instagram
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-[13px] text-white"
              >
                <img
                  className="min-w-[20px] w-[20px]"
                  src={ASSETS.telegram}
                  alt=""
                />
                Telegram
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <Link to={""} className="footer-link">
                <img src={ASSETS.arrowWhite} alt="" />
                Оплата и доставка
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
