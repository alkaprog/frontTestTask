export type GoodStatus = "boosted" | "hidden" | "default";

export type Good = {
  id: number;
  name: string;
  creationDate: number;
  photo: string;
  viewsCount: number;
  price: number;
  status: GoodStatus;
  category: number;
};
