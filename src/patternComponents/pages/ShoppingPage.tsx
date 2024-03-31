import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

const ShoppingPage = () => {

  const { onProductQuantityChange, ShoppingCart } = useShoppingCart();

  return (
    <div >
      <h1>ShoppingPage</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductQuantityChange}
              value={ShoppingCart[+product.id]?.quantity || 0}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

        <div className="shopping-cart">
          {
            Object.values(ShoppingCart).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                style={{
                  width: '100px',
                }}
                value={product.quantity}
                onChange={onProductQuantityChange}
              >
                <ProductImage className='custom-image' />

                <ProductButtons
                  className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                />
              </ProductCard>))
          }
        </div>
        {JSON.stringify(ShoppingCart, null, 8)}
      </div>
    </div>
  );
};

export default ShoppingPage;