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
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        ZarRing zargarlik sanoati uchun ishonchli va eng to’g’ri hamkor. Biz
        zargarlik sohasi uchun zarur bo’lgan yuqori sifatli qoliplar va ularning
        STL va 3DM fayllari bilan butun dunyoga doimiy yangiliklar bilan hizmat
        ko’rsatishga tayyormiz! Biz O’zbekistondagi zargarlik sanoatiga kerakli
        bo’ladigan Texnika va hom ashyolarini import qilishingizda to’g’ridan
        to’g’ri ishlab chiqaruvchi va sotuvchilardan shartnoma asosida sotib
        olishingiz uchun amaliy yordam ko’rsatamiz!
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        ZarRing jamoasi to’liqligicha o’z ishining muttahasislaridan tashkil
        topgan. Biz sizlar uchun qisqa vaqt ichida sifatli hizmat ko’rsata
        olamiz!
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        ZarRing bilan zargarlik ananasi va zamonaviy tehnologiyalar birlashadi.
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        Biz nafaqat biznes, balki zargarlik sanati va sanoatini rivojlantirishga
        hissa qo’shadigan jamoamiz!
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        Mahsulotlarimiz va hizmatlarimiz orqali har bir Zargarning ijodiy
        salohiyatlarini amalga oshirishga intilamiz!
      </div>
      <div className="text-center max-md:text-justify text-[14px] leading-[22px]">
        Biz bilannhamkorlik qilib siz nafaqat mahsulot, balki ishonchli sherik
        va zargarlik sohasida muvaffaqiyat sari yo’l topishingizga ishonamiz!!!
      </div>
    </div>
  );
};

export default Home;
