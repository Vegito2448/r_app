import { ProductCardHocProps } from "../interfaces/types";
import { ProductButtons } from "./ProductButtons";
import ProductCardHoc from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});


export {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
};

