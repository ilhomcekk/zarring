import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  // PRODUCTS
  fetchProduct: (params: any) => $api.get(`${API_URL}/product/`, { params }),
  fetchDetailProduct: (id: string) => $api.get(`${API_URL}/product/by/${id}`),
  fetchProductsByCategory: (id: string, params: any) =>
    $api.get(`${API_URL}/product/bycategoryid/${id}`, { params }),
  fetchProductSearch: (params: any) =>
    $api.get(`${API_URL}/product/search/`, { params }),
  // CATEGORY
  fetchCategory: (params: any) => $api.get(`${API_URL}/category`, { params }),
  // BANNER
  fetchBanner: () => $api.get(`${API_URL}/banner`),
  // BRAND
  fetchBrand: () => $api.get(`${API_URL}/brand`),
  // ORDER
  createOrder: (params: any) => $api.post(`${API_URL}/order/add`, params),
};
