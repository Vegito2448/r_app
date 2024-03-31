import { useState } from 'react';
import { ProductInCart, onChangeProductArgs } from "../interfaces/types";

const useShoppingCart = () => {

  const [ShoppingCart, setShoppingCart] = useState<{ [key: number]: ProductInCart; }>({});

  console.log(`🚀 ~ ShoppingPage ~ ShoppingCart:`, ShoppingCart);

  const onProductQuantityChange = ({ product, quantity }: onChangeProductArgs) => {

    console.log(`🚀 ~ onProductQuantityChange ~ quantity:`, quantity);



    setShoppingCart((prev) => {

      const productInCart: ProductInCart = prev[+product.id] || { ...product, quantity: 0 };

      if (Math.max(productInCart.quantity + quantity, 0) > 0) {
        productInCart.quantity += quantity;
        return {
          ...prev,
          [+product.id]: productInCart,
        };
      }

      delete prev[+product.id];
      return { ...prev };

      // const newShoppingCart = { ...prev };

      // if (quantity === 0) {
      //   delete newShoppingCart[+product.id];
      //   return newShoppingCart;
      // }

      // return {
      //   ...prev,
      //   [+product.id]: {
      //     ...product,
      //     quantity,
      //   },
      // };
    });

  };

  return ({
    onProductQuantityChange,
    ShoppingCart,
  });
};

export default useShoppingCart;