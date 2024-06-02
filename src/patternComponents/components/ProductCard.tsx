import { CSSProperties, createContext } from "react";
import useProduct from "../hooks/useProduct";
import { Product, ProductCardHandlers, ProductContextProps, initialValues, onChangeProductArgs } from '../interfaces/types';
import styles from '../styles/styles.module.css';
export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider: ProductProvider } = ProductContext;

const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {

  const { counter,
    increaseBy,
    maxCount,
    reset,
    isMaxReached
  } = useProduct({ onChange, product, value, initialValues });

  return (
    <ProductProvider
      value={{ counter, increaseBy, product, maxCount }}
    >
      <div className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          quantity: counter,
          isMaxReached,
          maxCount,
          product,
          increaseBy,
          reset
        })}
        {/* <ProductImage img={product.img} /> */}

        {/* <ProductTitle title={product.title} /> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </ProductProvider>
  );
};

export default ProductCard;