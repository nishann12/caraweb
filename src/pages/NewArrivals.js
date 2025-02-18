import React from 'react'
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ brand, name, price,  image }) => {
    const cardStyle = {
        width: '18rem',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '15px',
        border: '1px solid #dee2e6',
        transition: 'all 0.3s ease',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        cursor: 'pointer'
      };
      const hoverCardStyle = {
        ...cardStyle,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      };
    
      const imageStyle = {
        width: '100%',
        height: '280px',
        objectFit: 'cover',
        marginBottom: '1rem'
      };
    
      const brandStyle = {
        color: '#0d6efd',
        fontSize: '0.9rem',
        fontWeight: '500',
        marginBottom: '8px'
      };
    
      const nameStyle = {
        fontSize: '1.25rem',
        fontWeight: '500',
        marginBottom: '8px',
        color: '#212529'
      };
    
      const detailsContainerStyle = {
        position: 'relative' 
      };
    
      const ratingStyle = {
        display: 'flex',
        gap: '4px',
        marginBottom: '8px'  
      };
    
      const priceStyle = {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#212529'
      };
    
      const buttonStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid #0d6efd',
        backgroundColor: 'transparent',
        color: '#0d6efd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: '8px',
        transition: 'all 0.2s ease',
        position: 'absolute',  
        top: '0',          
        right: '0',           
      };
const [isHovered, setIsHovered] = React.useState(false);
return (
    <div 
      style={isHovered ? hoverCardStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} style={imageStyle} />
      <div style={detailsContainerStyle}>
        <div style={brandStyle}>{brand}</div>
        <div style={nameStyle}>{name}</div>
        <div style={ratingStyle}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="gold" color="gold" />
          ))}
        </div>
        <div style={priceStyle}>{price}/-</div>
        <button 
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0d6efd';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#0d6efd';
          }}
        >
          <ShoppingCart size={20} />
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
            <h2 style={titleStyle}>Featured Products</h2>
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



