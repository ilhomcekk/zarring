import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/images";
import "./footer.scss";
import { APP_ROUTES } from "../../router";

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover py-[40px] mt-[50px] max-md:pb-[100px]"
      style={{ backgroundImage: `url(${ASSETS.footerBg})` }}
    >
      <div className="wrapper">
        <div className="footer-wrapper p-[5px]">
          <div className="bg-footer px-[30px] py-[20px] grid md:grid-cols-3 gap-4">
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
            <div className="flex flex-col justify-center gap-2">
              {/* <Link to={""} className="footer-link">
                <img src={ASSETS.arrowWhite} alt="" />
                Оплата и доставка
              </Link>
              <Link to={""} className="footer-link">
                <img src={ASSETS.arrowWhite} alt="" />
                Акции и промокоды
              </Link>
              <Link to={""} className="footer-link">
                <img src={ASSETS.arrowWhite} alt="" />
                Новости и статьи
              </Link>
              <Link to={""} className="footer-link">
                <img src={ASSETS.arrowWhite} alt="" />
                Вопрос-ответ
              </Link> */}
              <Link
                to={APP_ROUTES.ABOUT}
                className="footer-link hover:text-[#4B94FF] font-[600]"
              >
                {/* <img src={ASSETS.arrowWhite} alt="" /> */}О нас
              </Link>
              <Link
                to={APP_ROUTES.POLITICS}
                className="footer-link hover:text-[#4B94FF] font-[600]"
              >
                {/* <img src={ASSETS.arrowWhite} alt="" /> */}
                Соглашение конфиденциальности
              </Link>
              {/* <Link to={""} className="footer-link">
                <img src={ASSETS.arrowWhite} alt="" />
                Карта сайта
              </Link> */}
              <Link to={""} className="footer-link hover:text-[#4B94FF] font-[600]">
                {/* <img src={ASSETS.arrowWhite} alt="" /> */}
                Контакты
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="footer-link max-md:mt-2">Телефон/телеграм:</div>
              <div className="text-[21px] text-white max-md:my-4">
                +998 88 144-05-44
              </div>
              {/* <div className="mt-auto text-white font-[700]">
                Доставка по городу Ташкент производится в течение 2 часов с
                момента подтверждения заказа покупателем. Доставка по регионам
                производится в течение 2 дней.
              </div> */}
              <div className="footer-link md:mt-6">
                Пункт самовывоза: ул. Амира Темура 42, Ташкент График работы:
                Понедельник-Суббота с 9:00 до 19:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
