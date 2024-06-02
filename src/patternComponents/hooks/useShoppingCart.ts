import { useState } from 'react';
import { ProductInCart, onChangeProductArgs } from "../interfaces/types";

const useShoppingCart = () => {

  const [ShoppingCart, setShoppingCart] = useState<{ [key: number]: ProductInCart; }>({});

  const onProductQuantityChange = ({ product, quantity }: onChangeProductArgs) => {
    setShoppingCart((prev) => {

      const newShoppingCart = { ...prev };

      if (quantity === 0) {
        delete newShoppingCart[+product.id];
        return newShoppingCart;
      }

      return {
        ...prev,
        [+product.id]: {
          ...product,
          quantity,
        },
      };
    });

  };

  return ({
    onProductQuantityChange,
    ShoppingCart,
  });
};

export default useShoppingCart;