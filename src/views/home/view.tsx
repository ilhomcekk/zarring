import { useTranslation } from "react-i18next";
import { Banner, Brands, Products, Title } from "../../components";
import { useEffect, useState } from "react";
import { categoryStore } from "../../store";

const Home = () => {
  const { t } = useTranslation();
  const { list, listLoading } = categoryStore();
  const [ids, setIds] = useState<number[] | string[]>([]);
  useEffect(() => {
    if (!listLoading) {
      setIds(() => list.map((item) => String(item.id)));
    }
  }, [listLoading]);
  const reversedArray = ids?.slice(0, 5)?.reverse();
  console.log(reversedArray);

  return (
    <div className="wrapper">
      <Banner />
      {reversedArray?.slice(0, 5)?.map((num) => (
        <Products categoryId={String(num)} className="md:mt-[50px] mt-[25px]" />
      ))}
      <Brands className="md:mt-[50px] mt-[35px] max-md:mb-4" />
      <Title
        title={t("whatCanOffer")}
        className="text-center md:mt-[50px] mt-[25px] max-md:mb-4"
      />
      <Title
        title={t("whatCanOffer2")}
        className="text-center md:mt-[50px] mt-[25px] max-md:mb-4"
      />
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        Biz zargarlik sohasi uchun zarur bo’lgan yuqori sifatli qoliplar va
        ularning stl fayllari bilan sizni doimiy yangiliklar bilan hizmat
        ko’rsatishga tayyormiz! Biz sizga kerakli bo’ladigan Texnikalar bilan
        to’g’ridan to’g’ri ishlab chiqaruvchilaridan va sotuvchilaridan sotib
        olishingiz uchun yordamlashamiz va kansalting hizmatlarini ko’rsata
        olamiz!
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        ZarRing jamoasi to’liqligicha o’z ishining muttaxasislaridan tashkil
        topgan! Biz sizlar uchun qisqa vaqt ichida sifatli hizmat ko’rsata
        olamiz.
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        ZarRing bilanzargarlik an’anasi va zamonaviy texnologiyalar birlashadi!
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        Zargarlar hamjamiyatini qo’llab quvvatlash. Biz nafaqat biznes, balki
        zargarlik san’atini rivojlantirishga hissa qo’shadigan jamoamiz.
        Maxsulotlarimiz va hizmatlarimiz orqali har bir zargarning ijodiy
        salohiyatlarini oshirishga intilamiz
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        Biz bilan hamkorlik qilib, siz nafaqat mahsulot, balki ishonchli sherik
        va zargarlik sohasida muvaffaqiyatcsari yo’l topishingizga ishonamiz!
      </div>
    </div>
  );
};

export default Home;
