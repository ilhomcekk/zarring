export type ProductType = {
  id: number;
  title: string | null;
  title_ru: string | null;
  title_uz: string | null;
  price: number;
  money_type: string;
  discription: string | null;
  img: string | null;
  count: number | null;
  characteristic: {
    label: string;
    value: string;
  }[];
  gallery: string[];
};
