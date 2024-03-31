import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string | number;
  title: string;
  description?: string;
  img?: string;
  price?: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;

}

export interface ProductCardHocProps {
  (props: ProductCardProps): JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
  Image: (props: ProductImageProps) => JSX.Element,
  Buttons: (props: ProductButtonsProps) => JSX.Element,
}

export interface onChangeProductArgs {
  product: Product;
  quantity: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}
