export type CategoryType = {
  id: number;
  title: string | null;
  subcategories: CategoryType[];
};