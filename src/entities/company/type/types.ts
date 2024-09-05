export type Company = {
  id: number;
  name: string;
  phone: string;
  description: string;
  schedule: string;
  address: string;
  coords: [number, number];
  rating: number;
  reviewsCount: number;
  isApproved: boolean;
  logo: string;
};
