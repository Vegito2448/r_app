import { CSSProperties, ReactElement, createContext } from "react";
import useProduct from "../hooks/useProduct";
import { Product, ProductContextProps, onChangeProductArgs } from "../interfaces/types";
import styles from '../styles/styles.module.css';
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider: ProductProvider } = ProductContext;

const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <ProductProvider
      value={{ counter, increaseBy, product }}
    >
      <div className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
        {/* <ProductImage img={product.img} /> */}

        {/* <ProductTitle title={product.title} /> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

      </div>
    </ProductProvider>
  );
};

export default ProductCard;