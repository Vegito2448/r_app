import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title }: { title?: string; }) => {
  const { product: { title: titleProvider } } = useContext(ProductContext);

  title = title || titleProvider;

  return <span className={styles.productDescription}>{title}</span>;
};