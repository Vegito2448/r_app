import { useContext } from "react";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img }: { img?: string; }) => {
  const { product: { img: imgProvider } } = useContext(ProductContext);

  img = img || imgProvider;

  return <img src={img || noImage} alt="Product" className={styles.productImg} />;
};