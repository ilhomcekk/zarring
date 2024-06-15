import { create } from "zustand";

type StateAction = {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  modals?: {
    register?: boolean;
    catalog?: boolean;
    menu?: boolean;
  };
};

const initialState: StateAction = {
  openModal: () => {},
  closeModal: () => {},
  modals: {
    register: false,
    catalog: false,
    menu: false,
  },
};

const modalsStore = create<StateAction>((set) => ({
  ...initialState,
  openModal: async (modalName) => {
    set((state) => ({ modals: { ...state.modals, [modalName]: true } }));
  },
  closeModal: async (modalName) => {
    set((state) => ({ modals: { ...state.modals, [modalName]: false } }));
  },
}));

export default modalsStore;
