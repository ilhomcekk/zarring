import { useTranslation } from "react-i18next";
import { BreadCrumb, Title } from "../../components";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <BreadCrumb
        items={[
          {
            name: t("aboutUs"),
          },
        ]}
      />
      <Title
        title={t("whatCanOffer")}
        className="text-center md:mt-[50px] mt-[25px] max-md:mb-4"
      />
      <div className="leading-[150%] text-center mt-32">
        ZarRing zargarlik sanoati uchun ishonchli va eng to’g’ri hamkor. Biz
        zargarlik sohasi uchun zarur bo’lgan yuqori sifatli qoliplar va ularning
        STL va 3DM fayllari bilan butun dunyoga doimiy yangiliklar bilan hizmat
        ko’rsatishga tayyormiz! Biz O’zbekistondagi zargarlik sanoatiga kerakli
        bo’ladigan Texnika va hom ashyolarini import qilishingizda to’g’ridan
        to’g’ri ishlab chiqaruvchi va sotuvchilardan shartnoma asosida sotib
        olishingiz uchun amaliy yordam ko’rsatamiz!
      </div>
      <div className="leading-[150%] text-center my-6">
        ZarRing jamoasi to’liqligicha o’z ishining muttahasislaridan tashkil
        topgan. Biz sizlar uchun qisqa vaqt ichida sifatli hizmat ko’rsata
        olamiz!
      </div>
      <div className="leading-[150%] text-center my-6">
        ZarRing bilan zargarlik ananasi va zamonaviy tehnologiyalar birlashadi.
      </div>
      <div className="leading-[150%] text-center my-6">
        Biz nafaqat biznes, balki zargarlik sanati va sanoatini rivojlantirishga
        hissa qo’shadigan jamoamiz!
      </div>
      <div className="leading-[150%] text-center my-6">
        Mahsulotlarimiz va hizmatlarimiz orqali har bir Zargarning ijodiy
        salohiyatlarini amalga oshirishga intilamiz!
      </div>
      <div className="leading-[150%] text-center mb-32">
        Biz bilannhamkorlik qilib siz nafaqat mahsulot, balki ishonchli sherik
        va zargarlik sohasida muvaffaqiyat sari yo’l topishingizga ishonamiz!!!
      </div>
    </div>
  );
};

export default About;
