import { create } from "zustand";
import { requests } from "../helpers/requests";
import { ProductType } from "../types";

type StateAction = {
  getList: (params: any) => Promise<any>;
  list: {};
  listLoading: boolean;
  getDetail: (id: string) => Promise<any>;
  detail: {};
  detailLoading: boolean;
  basketCards: ProductType[];
  favorites: ProductType[];
  toggleBasketCard: (product: ProductType) => Promise<any>;
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
  getDetail: async () => {},
  detail: {},
  detailLoading: false,
  basketCards: getBasketCards(),
  favorites: getFavorites(),
  toggleBasketCard: async () => {},
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
  getDetail: async (id) => {
    set({ detailLoading: true });
    try {
      const { data } = await requests.fetchDetailProduct(id);
      set({ detail: data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ detailLoading: false });
    }
  },
  toggleBasketCard: async (product) => {
    set((state) => {
      const existingProduct = state.basketCards.find(
        (item) => item.id === product.id
      );
      const newProducts = existingProduct
        ? state.basketCards?.filter((item) => item.id !== product?.id)
        : [...state.basketCards, product];
      setBasketCards(newProducts);
      return { basketCards: newProducts };
    });
  },
}));

export default productsStore;
