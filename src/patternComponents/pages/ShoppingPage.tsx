import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'Coffee Mug',
  description: 'A mug for your coffee',
  img: '/coffee-mug.png',
  price: 10,
};

const ShoppingPage = () => {
  return (
    <div >
      <h1>ShoppingPage</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={product} >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className="text-brown text-bold" title="Coffee" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className='custom-image' />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{
          backgroundColor: 'lightblue',
          color: 'darkblue',
        }}>
          <ProductCard.Image className='custom-image'
            style={{
              boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
            }}
          />
          <ProductCard.Title
            className="text-brown"
            title="Coffee"
            style={{
              fontWeight: 'bold',
            }}
          />
          <ProductCard.Buttons style={{
            backgroundColor: 'lightblue',
            color: 'darkblue',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }} />
        </ProductCard>

      </div>
    </div>
  );
};

export default ShoppingPage;