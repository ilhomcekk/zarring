import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <nav className="social">
      <ul>
        <li className="facebook">
          <a href="https://www.facebook.com/bmixuz">
            <div>
              <BiLogoFacebook />
            </div>
            Facebook
          </a>
        </li>
        <li className="telegram">
          <a href="https://t.me/bmixuz">
            <div>
              <FaTelegramPlane color="#000" />
            </div>
            Telegram
          </a>
        </li>
        <li className="instagram">
          <a href="https://www.instagram.com/bmix_uz">
            <div>
              <AiFillInstagram />
            </div>
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialSidebar;
