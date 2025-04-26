import React from 'react';
// import './PopularDishes.css';

const dishes = [
  {
    name: 'Paneer Butter Masala',
    description: 'Rich, creamy and packed with flavor — a North Indian favorite.',
    image: 'https://media.istockphoto.com/id/1665320059/photo/indian-paneer-butter-masala-directly-above-photo-on-white-background.jpg?s=612x612&w=0&k=20&c=j93V2k5YgeGYeVQCvsm-hTmC2vGJX1Rj32AmqxTnAzw=',
  },
  {
    name: 'VEG Biryani',
    description: 'Fragrant basmati rice layered with spicy veges — served hot!',
    image: 'https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=',
  },
  {
    name: 'Veg Pasta',
    description: 'Italian-style penne tossed in creamy tomato sauce with veggies.',
    image: 'https://img.freepik.com/free-photo/fusilli-pasta-salad-with-tomato-broccoli-napkin_23-2147926019.jpg?ga=GA1.1.1996890039.1728662859&semt=ais_hybrid&w=740',
  },
  {
    name: 'Chole Bhature',
    description: 'Punjabi classic! Spicy chickpeas with deep-fried fluffy bhature.',
    image: 'https://t3.ftcdn.net/jpg/13/67/74/12/240_F_1367741291_MjkH7klh8ZaM7rmY8bqTYHZ4vFKn7dr4.jpg',
  },
];

const Menu = () => {
  return (
    <div className="dishes-container">
      <h1 className="dishes-heading">Popular Dishes</h1>
      <p className="dishes-subtext">From spicy biryanis to creamy pastas, explore our most-loved dishes that keep foodies coming back for more!</p>
      
      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
