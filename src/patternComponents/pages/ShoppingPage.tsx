import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

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
          {(_) =>
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
            </>
          }</ProductCard>

      </div>
    </div>
  );
};

export default ShoppingPage;