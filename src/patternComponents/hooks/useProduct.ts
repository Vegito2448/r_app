import { useEffect, useRef, useState } from 'react';
import { Product, initialValues, onChangeProductArgs } from '../interfaces/types';


interface useProductProps {
  product: Product;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

const useProduct = ({ onChange, product, value = 0, initialValues }: useProductProps) => {

  const [counter, setCounter] = useState<number>(initialValues?.quantity || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {

    const newValue = Math.max(0, Math.min(initialValues?.maxQuantity || 0, counter + value));

    setCounter(newValue);

    onChange && onChange({ product, quantity: newValue });

  }

  const reset = () => setCounter(initialValues?.quantity || value);

  useEffect(() => {
    if (!isMounted.current)
      return;

    setCounter(value);

  }, [value])

  useEffect(() => {
    isMounted.current = true;
  }, []);


  return (
    {
      counter,
      maxCount: initialValues?.maxQuantity,
      isMaxReached: initialValues?.maxQuantity !== undefined && counter === initialValues?.maxQuantity,
      reset,
      increaseBy,

    }
  );
};



export default useProduct;