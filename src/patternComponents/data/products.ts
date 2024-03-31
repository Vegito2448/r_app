import { Product } from "../interfaces/types";

const product = {
  id: '1',
  title: 'Coffee Mug',
  description: 'A mug for your coffee',
  img: '/coffee-mug.png',
  price: 10,
};
const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  description: 'Definitely not a meme mug',
  img: '/coffee-mug2.png',
  price: 10,
};

export const products: Product[] = [product, product2];