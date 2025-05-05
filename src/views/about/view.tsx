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
      <Title
        title={t("whatCanOffer2")}
        className="text-center md:mt-[50px] mt-[25px] max-md:mb-4"
      />
      <div className="leading-[150%] text-center mt-32">
        Biz zargarlik sohasi uchun zarur bo’lgan yuqori sifatli qoliplar va
        ularning stl fayllari bilan sizni doimiy yangiliklar bilan hizmat
        ko’rsatishga tayyormiz! Biz sizga kerakli bo’ladigan Texnikalar bilan
        to’g’ridan to’g’ri ishlab chiqaruvchilaridan va sotuvchilaridan sotib
        olishingiz uchun yordamlashamiz va kansalting hizmatlarini ko’rsata
        olamiz!
      </div>
      <div className="leading-[150%] text-center my-6">
        ZarRing jamoasi to’liqligicha o’z ishining muttaxasislaridan tashkil
        topgan! Biz sizlar uchun qisqa vaqt ichida sifatli hizmat ko’rsata
        olamiz.
      </div>
      <div className="leading-[150%] text-center my-6">
        ZarRing bilanzargarlik an’anasi va zamonaviy texnologiyalar birlashadi!
      </div>
      <div className="leading-[150%] text-center my-6">
        Zargarlar hamjamiyatini qo’llab quvvatlash. Biz nafaqat biznes, balki
        zargarlik san’atini rivojlantirishga hissa qo’shadigan jamoamiz.
        Maxsulotlarimiz va hizmatlarimiz orqali har bir zargarning ijodiy
        salohiyatlarini oshirishga intilamiz
      </div>
      <div className="leading-[150%] text-center mb-32">
        Biz bilan hamkorlik qilib, siz nafaqat mahsulot, balki ishonchli sherik
        va zargarlik sohasida muvaffaqiyatcsari yo’l topishingizga ishonamiz!
      </div>
    </div>
  );
};

export default About;
