import { create } from "zustand";
import { requests } from "../helpers/requests";

type StateAction = {
  getList: (params: any) => Promise<any>;
  list: {};
  listLoading: boolean;
};

const initialState: StateAction = {
  getList: async () => {},
  list: {},
  listLoading: false,
};

const categoryStore = create<StateAction>((set) => ({
  ...initialState,
  getList: async (params) => {
    set({ listLoading: true });
    try {
      const { data } = await requests.fetchCategory(params);
      set({ list: data });
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ listLoading: false });
    }
  },
}));

export default categoryStore;
