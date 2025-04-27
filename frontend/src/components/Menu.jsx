import React from 'react';
import './Menu.css';

// Function to handle image loading errors
const handleImageError = (e) => {
  e.target.src = '/images/placeholder.jpg';
};

const baseImageUrl = 'https://raw.githubusercontent.com/your-username/your-repo/main/images/';

// Using placeholder images for now
// Using food images from a reliable CDN
// Using local images from public/images folder
const dishes = [
  {
    name: 'Veg Biryani',
    description: 'Aromatic basmati rice layered with fresh vegetables, saffron, and authentic Indian spices. Served with raita.',
    image: '/images/biryani.jpeg',
    price: '₹220',
    bestSeller: true,
    spicyLevel: 'Medium'
  },
  {
    name: 'Chole Bhature',
    description: 'Fluffy, deep-fried bread served with spiced chickpea curry, pickled onions, and green chutney.',
    image: '/images/chole bhature.jpeg',
    price: '₹180',
    bestSeller: true,
    spicyLevel: 'Hot'
  },
  {
    name: 'Margherita Pizza',
    description: 'Hand-tossed pizza with fresh mozzarella, tomatoes, basil leaves, and extra virgin olive oil.',
    image: '/images/pizza.jpeg',
    price: '₹350',
    bestSeller: true,
    spicyLevel: 'Mild'
  },
  {
    name: 'Veg Sandwich',
    description: 'Grilled multi-grain bread stuffed with fresh vegetables, cheese, and our special sauce.',
    image: '/images/sandwich.jpeg',
    price: '₹150',
    bestSeller: false,
    spicyLevel: 'Mild'
  },
  {
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato masala, served with sambar and coconut chutney.',
    image: '/images/dosa.jpeg',
    price: '₹160',
    bestSeller: true,
    spicyLevel: 'Medium'
  },
  {
    name: 'Veg Momos',
    description: 'Steamed dumplings filled with spiced minced vegetables, served with hot chili sauce.',
    image: '/images/momos.jpeg',
    price: '₹140',
    bestSeller: false,
    spicyLevel: 'Medium'
  }
];

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Our Special Menu</h1>
        <p>Discover the perfect blend of taste and tradition</p>
      </div>
      
      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="menu-card">
            <div className="menu-card-image">
              <img 
                src={dish.image} 
                alt={dish.name} 
                onError={handleImageError}
              />
              {dish.bestSeller && <span className="bestseller-badge">Bestseller</span>}
            </div>
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>{dish.name}</h3>
                <span className="price">{dish.price}</span>
              </div>
              <p className="description">{dish.description}</p>
              <div className="menu-card-footer">
                <span className={`spicy-level ${dish.spicyLevel.toLowerCase()}`}>
                  {dish.spicyLevel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
