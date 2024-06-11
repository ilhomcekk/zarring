import i18n from "../../i18n";
import { API_URL } from "../config/index";

import axios from "axios";

export const $api = axios.create({
  baseURL: API_URL,
});

$api.defaults.headers.common["Accept"] = "application/json";

export const tokenName = "zarringToken";
export const languageName = "zarringLanguage";

export const initApp = () => {
  const token = localStorage.getItem(tokenName);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setToken = (token: string) => {
  localStorage.setItem(tokenName, token);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
  $api.defaults.headers.common.Authorization = ``;
};

// Language
$api.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18n.language.toLowerCase();
  return config;
});

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  $api.defaults.headers.common["Accept-Language"] = lng;
  localStorage.setItem(languageName, lng);
};
