import { create } from "zustand";
import { requests } from "../helpers/requests";

type StateAction = {
  create: (params: any) => Promise<any>;
  list: { dataValues: { name: string | null; img: string | null } }[];
  createLoading: boolean;
};

const initialState: StateAction = {
  create: async () => {},
  list: [],
  createLoading: false,
};

const orderStore = create<StateAction>((set) => ({
  ...initialState,
  create: async (params) => {
    set({ createLoading: true });
    try {
      const { data } = await requests.createOrder(params);
      return data;
    } catch (err) {
      return err;
    } finally {
      set({ createLoading: false });
    }
  },
}));

export default orderStore;
