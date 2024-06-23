import { create } from "zustand";
import { requests } from "../helpers/requests";

type StateAction = {
  getList: () => Promise<any>;
  list: { name: string | null; img: string | null }[];
  listLoading: boolean;
};

const initialState: StateAction = {
  getList: async () => {},
  list: [],
  listLoading: false,
};

const brandStore = create<StateAction>((set) => ({
  ...initialState,
  getList: async () => {
    set({ listLoading: true });
    try {
      const { data } = await requests.fetchBrand();
      set({ list: data?.data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ listLoading: false });
    }
  },
}));

export default brandStore;
