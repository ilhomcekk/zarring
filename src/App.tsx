import "./App.css";
import { initApp } from "./helpers/api";
import { ConfigProvider } from "antd";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Router from "./router/Router";
import "./assets/scss/_app.scss";

function App() {
  initApp();
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#082567",
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;

// {
//   "russian": "Русский",
//   "uzbek": "Узбекский",
//   "city": "Город",
//   "catalog": "Каталог",
//   "back": "Назад",
//   "searchProduct": "Искать товары",
//   "favorites": "Избранное",
//   "basket": "Корзина",
//   "home": "Главная",
//   "brands": "Бренды",
//   "whatCanOffer": "Biz haqimizda!",
//   "whatCanOffer2": "ZarRing-Zargarlik sanoati uchun ishonchli va eng to’g’ri hamkor!",
//   "advantages": "Преимущества магазина Ziynat.COM.UZ",
//   "showAll": "См. все",
//   "aboutUs": "О нас",
//   "politics": "Соглашение конфиденциальности",
//   "contacts": "Контакты",
//   "phone": "Телефон",
//   "telegram": "Телеграм",
//   "noResults": "Ничего не найдено",
//   "your": "Ваша",
//   "product": "Товар",
//   "products": "Товары",
//   "order": "заказ",
//   "total": "Итого",
//   "checkout": "Перейти к оформлению",
//   "required": "Заполните",
//   "orderAccepted": "Ваш заказ принят! Мы вам перезвоним",
//   "design": "Оформить",
//   "name": "Имя",
//   "phoneNumber": "Номер телефона",
//   "intoDesire": "В желание",
//   "intoDesires": "В желание",
//   "amount": "Количество",
//   "price": "Цена",
//   "successAddToBasket": "Успешно добавлено в корзину",
//   "successRemoveFromBasket": "Успешно удалено",
//   "inBasket": "В корзине",
//   "addToBasket": "Добавить в корзину",
//   "categories": "Категории",
//   "searchByRequest": "Поиск по запросу",
//   "successAddToFavorites": "Успешно добавлено в избранного",
//   "successRemoveFromFavorites": "Успешно удалено из списка избранного",
//   "negotiable": "Договорная"
// }
