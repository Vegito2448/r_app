import { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";
export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {
  const { product: { title: titleProvider } } = useContext(ProductContext);

  title = title || titleProvider;

  return <span
    className={`${styles.productDescription} ${className}`}
    style={style}
  >{title}</span>;
};