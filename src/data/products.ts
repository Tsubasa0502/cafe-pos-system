export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Latte",
    price: 5.00,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Americano",
    price: 4.00,
    category: "Coffee",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 5.00,
    category: "Coffee",
  },
  {
    id: 4,
    name: "Croissant",
    price: 3.50,
    category: "Food",
  },
];