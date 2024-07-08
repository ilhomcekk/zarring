export type CategoryType = {
  id: number;
  title: string | null;
  img: string | null;
  subcategories: CategoryType[];
};