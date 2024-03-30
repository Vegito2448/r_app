import { createContext } from "react";
import useProduct from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/types";
import styles from '../styles/styles.module.css';
export const ProductContext = createContext({} as ProductContextProps);

const { Provider: ProductProvider } = ProductContext;

const ProductCard = ({ product, children }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <ProductProvider
      value={{ counter, increaseBy, product }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} /> */}

        {/* <ProductTitle title={product.title} /> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

      </div>
    </ProductProvider>
  );
};

export default ProductCard;