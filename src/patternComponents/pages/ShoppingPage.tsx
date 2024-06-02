import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
// import useShoppingCart from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {


  return (
    <div >
      <h1>ShoppingPage</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard
          initialValues={{
            quantity: 4,
            maxQuantity: 10,
          }}
          product={product}
          className="bg-dark text-white"
        >
          {({ quantity, isMaxReached, reset, increaseBy }) =>
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxReached &&
                <button onClick={() => increaseBy(2)}>+2</button>
              }
              <span>{quantity}</span>
            </>
          }</ProductCard>

      </div>
    </div>
  );
};

export default ShoppingPage;