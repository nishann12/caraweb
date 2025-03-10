import React, { useState } from 'react'
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../CartContext';
const ProductCard = ({ brand, name, price, image }) => {
  const { toggleCartItem } = useCart();
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    setAdded(!added);
    toggleCartItem({ brand, name, price, image });
  };

  return (
    <div 
      style={{
        width: '18rem',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '15px',
        border: '1px solid #dee2e6',
        transition: 'all 0.3s ease',
        backgroundColor: 'white',
        boxShadow: isHovered
          ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
          : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '1rem' }} />
      
      {/* Added position: 'relative' here */}
      <div style={{ position: 'relative', paddingBottom: '40px' }}> 
        <div style={{ color: '#0d6efd', fontSize: '0.9rem', fontWeight: '500', marginBottom: '8px' }}>{brand}</div>
        <div style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: '#212529' }}>{name}</div>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="gold" color="gold" />
          ))}
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#212529' }}>{price}/-</div>

        {}
        <button
          onClick={handleAddToCart}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          style={{
            backgroundColor: added ? 'red' : 'transparent',
            color: added ? 'white' : 'green',
            padding: '8px 12px',
            border: `2px solid ${added ? 'red' : 'green'}`,
            borderRadius: '18px',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          <ShoppingCart size={20} className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

const NewArrivals = () => {
    const containerStyle = {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 1rem'
    };
  
    const headerStyle = {
      textAlign: 'center',
      marginBottom: '2rem'
    };
  
    const titleStyle = {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    };
  
    const subtitleStyle = {
      color: '#6c757d',
      marginBottom: '2rem'
    };
  
    const gridStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem'
    };
  
    const products = [
      {
        brand: 'ARROW',
        name: 'Grey white HM',
        price: '390',
        image: 'https://react-first-app-five.vercel.app/assets/shirt3.jpg',
        rating: 5
      },
      {
        brand: 'ALLEN SOLLY',
        name: 'Red Beach HM',
        price: '490',
        image: 'https://react-first-app-five.vercel.app/assets/shirt4.jpg',
        rating: 5
      },
      {
        brand: 'TOMY HILFIGER',
        name: 'Blue Beach HM',
        price: '490',
        image: 'https://react-first-app-five.vercel.app/assets/shirt5.jpg',
        rating: 5
      },
      {
        brand: 'ALLEN SOLLY',
        name: 'Black White Line',
        price: '590',
        image: 'https://react-first-app-five.vercel.app/assets/shirt6.jpg',
        rating: 5
      },
      {
        brand: 'RAYMOND',
        name: 'Cream White Line',
        price: '990',
        image: 'https://react-first-app-five.vercel.app/assets/shirt7.jpg',
        rating: 5
      },
      {
        brand: 'LOUISE PHILIPPE',
        name: 'White Single HM',
        price: '790',
        image: 'https://react-first-app-five.vercel.app/assets/shirt8.jpg',
        rating: 5
      },
      {
        brand: 'ARROW',
        name: 'Sea Violet HM',
        price: '490',
        image: 'https://react-first-app-five.vercel.app/assets/shirt9.jpg',
        rating: 5
      },
      {
        brand: 'BLACK BERRYS',
        name: 'Light Blue Single ',
        price: '490',
        image: '	https://react-first-app-five.vercel.app/assets/shirt10.jpg',
        rating: 5
      },
      {
        brand: 'PETER ENGLAND',
        name: 'Ocean Blue',
        price: '390',
        image: 'https://react-first-app-five.vercel.app/assets/shirt11.jpg',
        rating: 5
      }
    ];
    return (
        <div style={containerStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>New Arrivals</h2>
            <p style={subtitleStyle}>Summer Collection New Modern Design</p>
          </div>
          <div style={gridStyle}>
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
          
        </div>
      );
};
export default NewArrivals;



