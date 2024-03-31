import { useEffect, useState } from 'react';
import { Product, onChangeProductArgs } from "../interfaces/types";


interface useProductProps {
  product: Product;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {
  const [counter, setCounter] = useState(value);


  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ product, quantity: newValue });

  }

  useEffect(() => {
    setCounter(value);
  }, [value])


  return (
    { counter, increaseBy }
  );
};

export default useProduct;