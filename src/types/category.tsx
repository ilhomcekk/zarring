export type CategoryType = {
  id: number;
  title: string | null;
  subcategory: CategoryType[];
};