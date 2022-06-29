export type ProductType = {
  id: number;
  category: number;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};
