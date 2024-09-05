import { create } from "zustand";
import { requests } from "../helpers/requests";
import { ProductType } from "../types";

type StateAction = {
  getList: (params: any) => Promise<any>;
  list: {};
  listLoading: boolean;
  getProductsByIds: (params: any) => Promise<any>;
  productsByIdsLoading: boolean;
  getDetail: (id: string) => Promise<any>;
  detail: ProductType;
  detailLoading: boolean;
  getProductSearch: (params: any) => Promise<any>;
  productSearch: ProductType[];
  productSearchLoading: boolean;
  getProductsByCategory: (id: string, params: any) => Promise<any>;
  productsByCategory: {
    data: ProductType[];
    currentPage: string;
    totalItems: string;
    totalPages: number;
  };
  productsByCategoryLoading: boolean;
  basketCards: ProductType[];
  favorites: ProductType[];
  toggleBasketCard: (product: ProductType, count?: number) => Promise<any>;
  setCount: (product: ProductType, count?: number) => Promise<any>;
  toggleFavoriteCard: (product: ProductType) => Promise<any>;
};

const getBasketCards = () =>
  JSON.parse(localStorage.getItem("basketCards") || "[]") as any;
const setBasketCards = (products: ProductType[]) =>
  localStorage.setItem("basketCards", JSON.stringify(products));
const getFavorites = () =>
  JSON.parse(localStorage.getItem("favorites") || "[]") as any;
const setFavorites = (products: ProductType[]) =>
  localStorage.setItem("favorites", JSON.stringify(products));

const initialState: StateAction = {
  getList: async () => {},
  list: {},
  listLoading: false,
  getProductsByIds: async () => {},
  productsByIdsLoading: false,
  getDetail: async () => {},
  detail: {} as any,
  detailLoading: false,
  getProductSearch: async () => {},
  productSearch: [],
  productSearchLoading: false,
  getProductsByCategory: async () => {},
  productsByCategory: {
    data: [],
    currentPage: "1",
    totalItems: "1",
    totalPages: 1,
  },
  productsByCategoryLoading: false,
  basketCards: getBasketCards(),
  favorites: getFavorites(),
  toggleBasketCard: async () => {},
  setCount: async () => {},
  toggleFavoriteCard: async () => {},
};

const productsStore = create<StateAction>((set) => ({
  ...initialState,
  getList: async (params) => {
    set({ listLoading: true });
    try {
      const { data } = await requests.fetchProduct(params);
      set({ list: data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ listLoading: false });
    }
  },
  getProductsByIds: async (params) => {
    set({ productsByIdsLoading: true });
    try {
      const { data } = await requests.fetchProductsByIds(params);
      set({ list: data?.data });
      setBasketCards(data?.data);
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ productsByIdsLoading: false });
    }
  },
  getDetail: async (id) => {
    set({ detailLoading: true });
    try {
      const { data } = await requests.fetchDetailProduct(id);
      set({ detail: data?.data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ detailLoading: false });
    }
  },
  getProductsByCategory: async (id, params) => {
    set({ productsByCategoryLoading: true });
    try {
      const { data } = await requests.fetchProductsByCategory(id, params);
      set({ productsByCategory: data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ productsByCategoryLoading: false });
    }
  },
  getProductSearch: async (params) => {
    set({ productSearchLoading: true });
    try {
      const { data } = await requests.fetchProductSearch(params);
      set({ productSearch: data?.data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ productSearchLoading: false });
    }
  },
  toggleBasketCard: async (product, count) => {
    set((state) => {
      const existingProduct = state.basketCards.find(
        (item) => item.id === product.id
      );
      if (count) {
        product["count"] = count;
      }
      const newProducts = existingProduct
        ? state.basketCards?.filter((item) => item.id !== product?.id)
        : [...state.basketCards, product];
      setBasketCards(newProducts);
      return { basketCards: newProducts };
    });
  },
  setCount: async (product, count) => {
    // @ts-ignore
    set((state) => {
      // @ts-ignore
      const existingItem: ProductType = state.basketCards?.find(
        (i) => i?.id === product?.id
      );
      // @ts-ignore
      existingItem["count"] = count;
      const newItems = [...state.basketCards];
      state.basketCards = newItems;
      setBasketCards(newItems);
      return existingItem;
    });
  },
  toggleFavoriteCard: async (product) => {
    set((state) => {
      const existingProduct = state.favorites.find(
        (item) => item.id === product.id
      );
      const newProducts = existingProduct
        ? state.favorites?.filter((item) => item.id !== product?.id)
        : [...state.favorites, product];
      setFavorites(newProducts);
      return { favorites: newProducts };
    });
  },
}));

export default productsStore;
