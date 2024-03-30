import { CSSProperties, useContext } from "react";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";
export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}


export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product: { img: imgProvider } } = useContext(ProductContext);

  img = img || imgProvider;

  return <img
    src={img || noImage} alt="Product"
    className={`${styles.productImg} ${className}`}
    style={style}
  />;
};