import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
  id: '1',
  title: 'Coffee Mug',
  description: 'A mug for your coffee',
  img: '/coffee-mug.png',
  price: 10,
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title="Coffee" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  );
};

export default ShoppingPage;